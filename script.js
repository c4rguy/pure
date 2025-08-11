// script.js
const API_BASE = "https://api.rbdb.xyz/";

const loadingEl = document.getElementById("loading");
const cardsContainer = document.getElementById("cardsContainer");
const errorMessage = document.getElementById("errorMessage");

function showLoading(){
  loadingEl.style.display = "flex";
  cardsContainer.innerHTML = "";
  errorMessage.hidden = true;
}
function hideLoading(){
  loadingEl.style.display = "none";
}
function showError(msg){
  errorMessage.hidden = false;
  errorMessage.querySelector("p").textContent = msg || "Failed to load database. Please try again later.";
}

function createCard(item){
  const container = document.createElement("div");
  container.className = "card";

  // Title row: avatar + nickname + ID
  const titleRow = document.createElement("div");
  titleRow.className = "title";
  
  // Create left side with avatar and nickname
  const leftSide = document.createElement("div");
  leftSide.className = "title-left";
  
  // Avatar image (if exists) - small circular
  if (item.avatar) {
    const img = document.createElement("img");
    img.src = item.avatar;
    img.alt = `${item.nickname || "User"} avatar`;
    img.className = "avatar";
    leftSide.appendChild(img);
  }
  
  const nick = document.createElement("div");
  nick.textContent = item.nickname || item.username || "Unknown";
  leftSide.appendChild(nick);
  
  const idSpan = document.createElement("div");
  idSpan.style.fontSize = "0.85rem";
  idSpan.style.color = "#ccc";
  idSpan.textContent = item.id || "";
  
  titleRow.append(leftSide, idSpan);
  container.appendChild(titleRow);

  // Note section
  const noteEl = document.createElement("div");
  noteEl.textContent = item.note || item.refs?.join(", ") || "";
  noteEl.style.marginTop = "8px";
  container.appendChild(noteEl);

  // Tags as badges
  const badges = document.createElement("div");
  badges.className = "badges";
  (item.tags || []).forEach(tag => {
    const b = document.createElement("span");
    b.className = "badge";
    b.textContent = tag;
    badges.appendChild(b);
  });
  container.appendChild(badges);

  return container;
}

async function loadDatabase(){
  showLoading();
  try {
    const res = await fetch(API_BASE, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    const items = Array.isArray(json.users) ? json.users : [];
    if (items.length === 0) {
      hideLoading();
      showError("No users found in the database.");
      return;
    }

    items.forEach(item => {
      const card = createCard(item);
      cardsContainer.appendChild(card);
    });

    hideLoading();
  } catch (err) {
    console.error("Error loading RBDB:", err);
    hideLoading();
    showError("Failed to load database. Check console for details.");
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", loadDatabase);