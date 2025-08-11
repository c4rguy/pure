// NOTE: This script uses a local data object for demonstration.
// To host your own API, you can upload the JSON content of 'localApiData'
// to a service like GitHub Gist (use the "raw" URL) or a static file host.
// Then, you can restore the original `loadDatabase` function and replace
// the API_BASE URL with your new URL.

const loadingEl = document.getElementById("loading");
const cardsContainer = document.getElementById("cardsContainer");
const errorMessage = document.getElementById("errorMessage");
const searchInput = document.getElementById("searchInput");

let allUsers = []; // To store the full list of users for searching

// Local data object as provided in the prompt.
const localApiData = {
  "users": [{"nickname":"Astroghost","id":"1208128286471880807","tags":["Malware","Paster","Fraud","Staff"],"note":"Ex-Manager of Ronix, nuked Pulsery.","refs":["https://v3rm.net/threads/cw-astroghost-aka-nuker-predator-scammer-ratter.21469/","https://v3rm.net/threads/cw-about-astroghost-getting-paid-by-setinstance-then-nuked-nexora.22007/","https://www.youtube.com/watch?v=zUShmzrj9p8"],"username":"@astroghxst","created":"2024-02-16","avatar":"https://cdn.discordapp.com/avatars/1208128286471880807/79faafe4a8f33b6fa07d6079adfdcffc"},{"nickname":"Ronver/Darklight/Nexity","id":"335041885485662209","tags":["Alt-Hopping","Owner"],"note":"Owner of Ronix Executor. Goes under many different Aliases. Has been in several controversies.","refs":["https://v3rm.net/threads/cw-ronver-nexity-ronix-danner-darklight.20989/","https://v3rm.net/threads/cw-blah-blah-nexity-darknight-whatever.15084/","https://v3rm.net/threads/cw-nexity-scammer-manipulator.12156/","https://www.youtube.com/watch?v=zUShmzrj9p8"],"username":"@projectkrono","created":"2017-07-13","avatar":"https://cdn.discordapp.com/avatars/335041885485662209/326e07efbae54e09123b0f6587565e57"},{"nickname":"ValeDreamer","id":"1384319269755682827","tags":["Malware","Fraud","Exitscam","Paster","Alt-Hopping"],"note":"Uses many different aliases and accounts, like Nevy and Consist combined, usually included in every scandal and CW.","refs":["https://v3rm.net/threads/community-warning-argon-nevy-valedreamer-kq.19759/","https://v3rm.net/threads/valedreamer-oxycontin-eulen.8595/","https://v3rm.net/threads/valedreamer-is-back-and-its-funnier-than-ever.12545/","https://www.reddit.com/r/robloxhackers/comments/1doefsd/valedreamer_has_ratted_over_500_people_with_proof/"],"username":"@usmxn93","created":"2025-06-16","avatar":"https://cdn.discordapp.com/avatars/1384319269755682827/b6b31fd6079ead76b3c398ee0f710ba5"},{"nickname":"Consist","id":"Unknown","tags":["Malware","Fraud","Exitscam","Paster","Alt-Hopping"],"note":"Uses many different aliases and accounts, basically Nevy and ValeDreamer.","refs":["https://v3rm.net/threads/community-warning-argon-nevy-valedreamer-kq.19759/","https://v3rm.net/threads/valedreamer-oxycontin-eulen.8595/"],"username":"Unknown Account","created":"2025-08-11","avatar":"https://cdn.discordapp.com/embed/avatars/5.png"},{"nickname":"Nevy","id":"1317430380068077622","tags":["Malware","Fraud","Exitscam","Paster","Alt-Hopping"],"note":"Uses many different aliases and accounts, basically ValeDreamer and Consist.","refs":["https://v3rm.net/threads/community-warning-argon-nevy-valedreamer-kq.19759/","https://v3rm.net/threads/valedreamer-oxycontin-eulen.8595/"],"username":"@nevylol","created":"2024-12-14","avatar":"https://cdn.discordapp.com/avatars/1317430380068077622/32c31a12e4475cf435b89d4ee923d6df"},{"nickname":"Clarity","id":"1372966978964426883","tags":["Malware","Fraud","Exitscam","Paster","Alt-Hopping","Owner"],"note":"Ex-Co-Owner of Luna, Ex-Co-Founder of Paradox, collaborates with other people in this blacklist. Tried to rat Luna and Atlantis.","refs":["https://v3rm.net/threads/2-in-1-cw-element-5ive-softworks-orange-luna-paradox-clarity.15041/","https://v3rm.net/threads/yeah-dont-buy-paradox-hosting-cw.15927/","https://v3rm.net/threads/cw-vexyflows-crossflows-clarityflows-clawcore-atlantis-rat.17883/"],"username":"@.qztr_","created":"2025-05-16","avatar":"https://cdn.discordapp.com/avatars/1372966978964426883/d7b6246ad826f341202b68af1c8f5cd0"},{"nickname":"Etheriut","id":"Unknown","tags":["Fraud","Owner"],"note":"Owner of AWP, left the executor detected and broken.","refs":["https://v3rm.net/threads/why-use-awp.21080/"],"username":"Unknown Account","created":"2025-08-11","avatar":"https://cdn.discordapp.com/embed/avatars/0.png"},{"nickname":"Merkuri","id":"Unknown","tags":["Paster","Alt-Hopping","Staff"],"note":"Ex-Staff Member at AWP. Exposed for using AI to answer questions about C++ and Hyperion.","refs":["https://v3rm.net/threads/awp-where-is-merkuri.22061/"],"username":"Unknown Account","created":"2025-08-11","avatar":"https://cdn.discordapp.com/embed/avatars/2.png"},{"nickname":"Glosary","id":"1224779977317285932","tags":["Paster","Owner"],"note":"Owner of Arctic Executor, a pasted executor. Many figures on this blacklist also being in that server while also being the result of Argon/Atlantis.","username":"@glosaryyy","created":"2024-04-02","avatar":"https://cdn.discordapp.com/avatars/1224779977317285932/138548b088db549f4afee156b74c77ec"},{"nickname":"Hexxr","id":"709238641372823564","tags":["Malware","Alt-Hopping"],"note":"Pedophile, drug addict, ratter.","refs":["https://v3rm.net/threads/hexxr-a-serious-warning-to-the-community.22515/","https://v3rm.net/threads/cw-hexxr-hexpatch-ketxne.22285/"],"username":"@vd75","created":"2020-05-11","avatar":"https://cdn.discordapp.com/avatars/709238641372823564/d09b7b2d2cdae12f4ef58e4fc34f2cf8"},{"nickname":"Kjs/bxp0","id":"1354916670757535866","tags":["Paster","Alt-Hopping","Owner"],"note":"General skid.","refs":["https://v3rm.net/threads/cw-_bxp0-kjs_14-skiddyskiddyskid.22276/"],"username":"@kjs.lol","created":"2025-03-27","avatar":"https://cdn.discordapp.com/avatars/1354916670757535866/6e2ed4ae6fb67db775ba1d463f29e8fd"},{"nickname":"Darkness","id":"1133943599344656394","tags":["Paster","Owner"],"note":"Owner of Vornex, a new Android exploit, suspected to be an alternate account.","username":"@nightnessinthedark","created":"2023-07-27","avatar":"https://cdn.discordapp.com/avatars/1133943599344656394/86ee8110ffed7430650274462d9149a0"},{"nickname":"Blurzz","id":"1231277593332809820","tags":["Paster","Owner"],"note":"Owner of Fluxteam, now renamed Subz.","username":"@blurzz.sys","created":"2024-04-20","avatar":"https://cdn.discordapp.com/avatars/1231277593332809820/3f978a9775f4df874ceb69d7789598e1"},{"nickname":"Orange/Mythic","id":"1264040231213072394","tags":["Asshole","Owner","Inactive"],"note":"Owner of Element before he deleted it. Just a general asshole.","refs":["https://v3rm.net/threads/cw-orange-element-the-safety-of-the-roblox-exploiting-com.14531/","https://v3rm.net/threads/2-in-1-cw-element-5ive-softworks-orange-luna-paradox-clarity.15041/","https://v3rm.net/threads/cw-element-orange-part-2-daily-episodes-of-element-drama.15611/"],"username":"@lolmythiclol","created":"2024-07-20","avatar":"https://cdn.discordapp.com/avatars/1264040231213072394/acd066bf4ca0c63ced3d42c39aea371b"},{"nickname":"kq","id":"1241238935288545322","tags":["Paster","Fraud"],"note":"Owner of Zorara, now known as Drift. Has scammed in the past. Zorara is based off Xeno, and they discretely hid that from their community.","refs":["https://v3rm.net/threads/community-warning-argon-nevy-valedreamer-kq.19759/"],"username":"@kqrara","created":"2024-05-18","avatar":"https://cdn.discordapp.com/avatars/1241238935288545322/19cd591ca5561cc7b16dafbc2c140f85"},{"nickname":"Crossflows","id":"1387954042054905987","tags":["Malware","Paster","Fraud","Alt-Hopping","Exitscam"],"note":"Was heavily involved in the whole Atlantis/Argon situation.","refs":["https://v3rm.net/threads/cw-vexyflows-crossflows-clarityflows-clawcore-atlantis-rat.17883/"],"username":"@leakinglarps","created":"2025-06-27","avatar":"https://cdn.discordapp.com/avatars/1387954042054905987/da466cda7a925772d74e4d8c2be3cfbb"},{"nickname":"Lxzp/Yoru","id":"1319549583017250908","tags":["Paster","Fraud","Malware","Alt-Hopping","Owner"],"note":"Former owner of Atlantis. Exit-scammed in the past as Yoru before coming back as Lxzp Involved in the raiding and stealing of Luna's server, as well as distributing an infected injector.","refs":["https://cheat.today/#:~:text=3-,Atlantis,-Unknown","https://v3rm.net/threads/be-aware-lxzp.17376/","https://v3rm.net/threads/cw-lxzp-yoru-savage-dtbu-skidding-ratting-raiding.17437/"],"username":"@_lxzp","created":"2024-12-20","avatar":"https://cdn.discordapp.com/avatars/1319549583017250908/a_70d369abf7bf1496f58ad610f56f5c7d"},{"nickname":"Sakpot","id":"888177948111274047","tags":["Paster","Exitscam","Fraud","Malware","Owner"],"note":"He's basically be involved in any malicious exploit or exitscam known to man while also monetising them all. He found the infinite money glitch.","refs":["https://urbandictionary.com/define.php?term=sakpot","https://youtube.com/watch?v=TGifTyjE-rg"],"username":"@sakpog","created":"2021-09-16","avatar":"https://cdn.discordapp.com/avatars/888177948111274047/ab6998fed55d5deb374c971a464e1686"},{"nickname":"Anze","id":"979015770853998592","tags":["Fraud","Exitscam","Owner"],"note":"Ex-owner of multiple questionable executors, left exploiting to make malicious scripts to ban cheaters.","username":"@a.nze","created":"2022-05-25","avatar":"https://cdn.discordapp.com/avatars/979015770853998592/35d5863fd22bc68e4b21101eea36cc52"}]
};

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
  
  const leftSide = document.createElement("div");
  leftSide.className = "title-left";
  
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
  idSpan.className = "userid";
  idSpan.textContent = item.id || "";
  
  titleRow.append(leftSide, idSpan);
  container.appendChild(titleRow);

  // Note section
  if (item.note) {
      const noteEl = document.createElement("div");
      noteEl.textContent = item.note;
      noteEl.style.marginTop = "8px";
      container.appendChild(noteEl);
  }

  // References section
  if (item.refs && item.refs.length > 0) {
    const refsContainer = document.createElement("div");
    refsContainer.className = "references";
    
    const refsTitle = document.createElement("div");
    refsTitle.className = "references-title";
    refsTitle.textContent = "References";
    refsContainer.appendChild(refsTitle);

    item.refs.forEach(refUrl => {
      const link = document.createElement("a");
      link.href = refUrl;
      link.className = "ref-link";
      link.textContent = refUrl;
      link.target = "_blank"; // Open in new tab
      link.rel = "noopener noreferrer";
      refsContainer.appendChild(link);
    });
    container.appendChild(refsContainer);
  }

  // Tags as badges
  if (item.tags && item.tags.length > 0) {
      const badges = document.createElement("div");
      badges.className = "badges";
      item.tags.forEach(tag => {
        const b = document.createElement("span");
        b.className = "badge";
        b.textContent = tag;
        badges.appendChild(b);
      });
      container.appendChild(badges);
  }

  return container;
}

function renderCards(items) {
  cardsContainer.innerHTML = ""; // Clear existing cards
  if (items.length === 0) {
    cardsContainer.innerHTML = "<p>No matching users found.</p>";
    return;
  }
  items.forEach(item => {
    const card = createCard(item);
    cardsContainer.appendChild(card);
  });
}

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  const filteredUsers = allUsers.filter(user => {
    const nickname = (user.nickname || "").toLowerCase();
    const username = (user.username || "").toLowerCase();
    const id = (user.id || "").toLowerCase();
    const tags = (user.tags || []).join(" ").toLowerCase(); // Join tags into a single string for searching

    return nickname.includes(query) ||
           username.includes(query) ||
           id.includes(query) ||
           tags.includes(query);
  });
  renderCards(filteredUsers);
}

function loadDatabase(){
  showLoading();
  try {
    // Using the local data object.
    const items = Array.isArray(localApiData.users) ? localApiData.users : [];
    
    if (items.length === 0) {
      hideLoading();
      showError("No users found in the database.");
      return;
    }

    allUsers = items; // Store all users for searching
    renderCards(allUsers); // Initial render
    hideLoading();

  } catch (err) {
    console.error("Error loading RBDB:", err);
    hideLoading();
    showError("Failed to load database. Check console for details.");
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", loadDatabase);
// Add event listener for the search input
searchInput.addEventListener("input", handleSearch);