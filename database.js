// RBDB - Blacklist Database
// Easy to maintain format - just add new entries to the users array

export const DATABASE = { // Added 'export' keyword
  version: "2.0.0",
  lastUpdated: "2025-08-11",
  totalUsers: 19,
  
  // User database - easy format for adding new entries
  users: [
    {
      // Basic Info
      nickname: "Astroghost",
      username: "@astroghxst",
      id: "1208128286471880807",
      avatar: "https://cdn.discordapp.com/avatars/1208128286471880807/79faafe4a8f33b6fa07d6079adfdcffc",
      
      // Classification
      tags: ["Malware", "Paster", "Fraud", "Staff"],
      severity: "high", // high, medium, low
      
      // Details
      note: "Ex-Manager of Ronix, nuked Pulsery. Known for destructive behavior and malicious activities within the executor community.",
      
      // Evidence
      references: [
        "https://v3rm.net/threads/cw-astroghost-aka-nuker-predator-scammer-ratter.21469/",
        "https://v3rm.net/threads/cw-about-astroghost-getting-paid-by-setinstance-then-nuked-nexora.22007/",
        "https://www.youtube.com/watch?v=zUShmzrj9p8"
      ],
      
      // Metadata
      created: "2024-02-16",
      verified: true
    },
    
    {
      nickname: "Ronver/Darklight/Nexity",
      username: "@projectkrono", 
      id: "335041885485662209",
      avatar: "https://cdn.discordapp.com/avatars/335041885485662209/326e07efbae54e09123b0f6587565e57",
      
      tags: ["Alt-Hopping", "Owner"],
      severity: "medium",
      
      note: "Owner of Ronix Executor. Uses multiple aliases and has been involved in numerous controversies. Known for deceptive practices.",
      
      references: [
        "https://v3rm.net/threads/cw-ronver-nexity-ronix-danner-darklight.20989/",
        "https://v3rm.net/threads/cw-blah-blah-nexity-darknight-whatever.15084/",
        "https://v3rm.net/threads/cw-nexity-scammer-manipulator.12156/",
        "https://www.youtube.com/watch?v=zUShmzrj9p8"
      ],
      
      created: "2017-07-13",
      verified: true
    },
    
    {
      nickname: "ValeDreamer",
      username: "@usmxn93",
      id: "1384319269755682827", 
      avatar: "https://cdn.discordapp.com/avatars/1384319269755682827/b6b31fd6079ead76b3c398ee0f710ba5",
      
      tags: ["Malware", "Fraud", "Exitscam", "Paster", "Alt-Hopping"],
      severity: "high",
      
      note: "Uses multiple aliases including Nevy and Consist. Frequently involved in scandals and community warnings. Has ratted over 500 users.",
      
      references: [
        "https://v3rm.net/threads/community-warning-argon-nevy-valedreamer-kq.19759/",
        "https://v3rm.net/threads/valedreamer-oxycontin-eulen.8595/",
        "https://www.reddit.com/r/robloxhackers/comments/1doefsd/valedreamer_has_ratted_over_500_people_with_proof/"
      ],
      
      created: "2025-06-16",
      verified: true
    },
    
    {
      nickname: "Consist",
      username: "Unknown Account",
      id: "Unknown",
      avatar: "https://cdn.discordapp.com/embed/avatars/5.png",
      
      tags: ["Malware", "Fraud", "Exitscam", "Paster", "Alt-Hopping"],
      severity: "high",
      
      note: "Uses many different aliases and accounts, basically Nevy and ValeDreamer. Part of the same network of malicious actors.",
      
      references: [
        "https://v3rm.net/threads/community-warning-argon-nevy-valedreamer-kq.19759/",
        "https://v3rm.net/threads/valedreamer-oxycontin-eulen.8595/"
      ],
      
      created: "2025-08-11",
      verified: false
    },
    
    {
      nickname: "Nevy",
      username: "@nevylol",
      id: "1317430380068077622",
      avatar: "https://cdn.discordapp.com/avatars/1317430380068077622/32c31a12e4475cf435b89d4ee923d6df",
      
      tags: ["Malware", "Fraud", "Exitscam", "Paster", "Alt-Hopping"], 
      severity: "high",
      
      note: "Uses many different aliases and accounts, basically ValeDreamer and Consist. Part of coordinated malicious network.",
      
      references: [
        "https://v3rm.net/threads/community-warning-argon-nevy-valedreamer-kq.19759/",
        "https://v3rm.net/threads/valedreamer-oxycontin-eulen.8595/"
      ],
      
      created: "2024-12-14",
      verified: true
    },
    
    {
      nickname: "Clarity", 
      username: "@.qztr_",
      id: "1372966978964426883",
      avatar: "https://cdn.discordapp.com/avatars/1372966978964426883/d7b6246ad826f341202b68af1c8f5cd0",
      
      tags: ["Malware", "Fraud", "Exitscam", "Paster", "Alt-Hopping", "Owner"],
      severity: "high",
      
      note: "Ex-Co-Owner of Luna, Ex-Co-Founder of Paradox. Attempted to rat Luna and Atlantis executors. Collaborates with other blacklisted individuals.",
      
      references: [
        "https://v3rm.net/threads/2-in-1-cw-element-5ive-softworks-orange-luna-paradox-clarity.15041/",
        "https://v3rm.net/threads/yeah-dont-buy-paradox-hosting-cw.15927/",
        "https://v3rm.net/threads/cw-vexyflows-crossflows-clarityflows-clawcore-atlantis-rat.17883/"
      ],
      
      created: "2025-05-16",
      verified: true
    },
    
    {
      nickname: "Etheriut",
      username: "Unknown Account",
      id: "Unknown",
      avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
      
      tags: ["Fraud", "Owner"],
      severity: "medium",
      
      note: "Owner of AWP executor. Left the executor detected and broken, abandoning users without support.",
      
      references: [
        "https://v3rm.net/threads/why-use-awp.21080/"
      ],
      
      created: "2025-08-11",
      verified: false
    },
    
    {
      nickname: "Merkuri",
      username: "Unknown Account", 
      id: "Unknown",
      avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
      
      tags: ["Paster", "Alt-Hopping", "Staff"],
      severity: "low",
      
      note: "Ex-Staff Member at AWP. Exposed for using AI to answer technical questions about C++ and Hyperion without actual knowledge.",
      
      references: [
        "https://v3rm.net/threads/awp-where-is-merkuri.22061/"
      ],
      
      created: "2025-08-11",
      verified: false
    },
    
    {
      nickname: "Glosary",
      username: "@glosaryyy",
      id: "1224779977317285932",
      avatar: "https://cdn.discordapp.com/avatars/1224779977317285932/138548b088db549f4afee156b74c77ec",
      
      tags: ["Paster", "Owner"],
      severity: "medium",
      
      note: "Owner of Arctic Executor, a pasted executor. Associated with multiple blacklisted figures and Argon/Atlantis network.",
      
      references: [],
      
      created: "2024-04-02",
      verified: false
    },
    
    {
      nickname: "Hexxr",
      username: "@vd75",
      id: "709238641372823564",
      avatar: "https://cdn.discordapp.com/avatars/709238641372823564/d09b7b2d2cdae12f4ef58e4fc34f2cf8",
      
      tags: ["Malware", "Alt-Hopping"],
      severity: "critical", // New severity level for extreme cases
      
      note: "Serious community threat. Known predator and ratter with substance abuse issues. Poses significant danger to community members.",
      
      references: [
        "https://v3rm.net/threads/hexxr-a-serious-warning-to-the-community.22515/",
        "https://v3rm.net/threads/cw-hexxr-hexpatch-ketxne.22285/"
      ],
      
      created: "2020-05-11",
      verified: true
    },
    
    {
      nickname: "Kjs/bxp0",
      username: "@kjs.lol",
      id: "1354916670757535866",
      avatar: "https://cdn.discordapp.com/avatars/1354916670757535866/6e2ed4ae6fb67db775ba1d463f29e8fd",
      
      tags: ["Paster", "Alt-Hopping", "Owner"],
      severity: "low",
      
      note: "General skid with poor reputation. Known for low-quality pasted content and unprofessional behavior.",
      
      references: [
        "https://v3rm.net/threads/cw-_bxp0-kjs_14-skiddyskiddyskid.22276/"
      ],
      
      created: "2025-03-27",
      verified: false
    },
    
    {
      nickname: "Darkness",
      username: "@nightnessinthedark",
      id: "1133943599344656394",
      avatar: "https://cdn.discordapp.com/avatars/1133943599344656394/86ee8110ffed7430650274462d9149a0",
      
      tags: ["Paster", "Owner"],
      severity: "medium",
      
      note: "Owner of Vornex Android exploit. Suspected to be an alternate account of another blacklisted individual.",
      
      references: [],
      
      created: "2023-07-27",
      verified: false
    },
    
    {
      nickname: "Blurzz",
      username: "@blurzz.sys",
      id: "1231277593332809820",
      avatar: "https://cdn.discordapp.com/avatars/1231277593332809820/3f978a9775f4df874ceb69d7789598e1",
      
      tags: ["Paster", "Owner"],
      severity: "medium",
      
      note: "Owner of Fluxteam, later renamed to Subz. History of rebranding and questionable practices.",
      
      references: [],
      
      created: "2024-04-20",
      verified: false
    },
    
    {
      nickname: "Orange/Mythic",
      username: "@lolmythiclol",
      id: "1264040231213072394", 
      avatar: "https://cdn.discordapp.com/avatars/1264040231213072394/acd066bf4ca0c63ced3d42c39aea371b",
      
      tags: ["Asshole", "Owner", "Inactive"],
      severity: "medium",
      
      note: "Ex-owner of Element executor before deleting it. Known for generally toxic behavior and poor community management.",
      
      references: [
        "https://v3rm.net/threads/cw-orange-element-the-safety-of-the-roblox-exploiting-com.14531/",
        "https://v3rm.net/threads/2-in-1-cw-element-5ive-softworks-orange-luna-paradox-clarity.15041/",
        "https://v3rm.net/threads/cw-element-orange-part-2-daily-episodes-of-element-drama.15611/"
      ],
      
      created: "2024-07-20",
      verified: true
    },
    
    {
      nickname: "kq",
      username: "@kqrara",
      id: "1241238935288545322",
      avatar: "https://cdn.discordapp.com/avatars/1241238935288545322/19cd591ca5561cc7b16dafbc2c140f85",
      
      tags: ["Paster", "Fraud"],
      severity: "medium",
      
      note: "Owner of Zorara (now Drift). Has scammed users in the past. Zorara is based on Xeno executor, which they hid from their community.",
      
      references: [
        "https://v3rm.net/threads/community-warning-argon-nevy-valedreamer-kq.19759/"
      ],
      
      created: "2024-05-18",
      verified: true
    },
    
    {
      nickname: "Crossflows",
      username: "@leakinglarps",
      id: "1387954042054905987",
      avatar: "https://cdn.discordapp.com/avatars/1387954042054905987/da466cda7a925772d74e4d8c2be3cfbb",
      
      tags: ["Malware", "Paster", "Fraud", "Alt-Hopping", "Exitscam"],
      severity: "high",
      
      note: "Heavily involved in the Atlantis/Argon situation. Part of coordinated malicious network targeting executor communities.",
      
      references: [
        "https://v3rm.net/threads/cw-vexyflows-crossflows-clarityflows-clawcore-atlantis-rat.17883/"
      ],
      
      created: "2025-06-27",
      verified: true
    },
    
    {
      nickname: "Lxzp/Yoru",
      username: "@_lxzp", 
      id: "1319549583017250908",
      avatar: "https://cdn.discordapp.com/avatars/1319549583017250908/a_70d369abf7bf1496f58ad610f56f5c7d",
      
      tags: ["Paster", "Fraud", "Malware", "Alt-Hopping", "Owner"],
      severity: "high",
      
      note: "Former owner of Atlantis. Exit-scammed as Yoru before returning as Lxzp. Involved in Luna server raids and infected injector distribution.",
      
      references: [
        "https://cheat.today/#:~:text=3-,Atlantis,-Unknown",
        "https://v3rm.net/threads/be-aware-lxzp.17376/",
        "https://v3rm.net/threads/cw-lxzp-yoru-savage-dtbu-skidding-ratting-raiding.17437/"
      ],
      
      created: "2024-12-20",
      verified: true
    },
    
    {
      nickname: "Sakpot",
      username: "@sakpog",
      id: "888177948111274047",
      avatar: "https://cdn.discordapp.com/avatars/888177948111274047/ab6998fed55d5deb374c971a464e1686",
      
      tags: ["Paster", "Exitscam", "Fraud", "Malware", "Owner"],
      severity: "critical",
      
      note: "Involved in virtually every major malicious exploit and exit scam. Known for consistently monetizing harmful software and deceiving users.",
      
      references: [
        "https://urbandictionary.com/define.php?term=sakpot",
        "https://youtube.com/watch?v=TGifTyjE-rg"
      ],
      
      created: "2021-09-16",
      verified: true
    },
    
    {
      nickname: "Anze",
      username: "@a.nze",
      id: "979015770853998592",
      avatar: "https://cdn.discordapp.com/avatars/979015770853998592/35d5863fd22bc68e4b21101eea36cc52",
      
      tags: ["Fraud", "Exitscam", "Owner"],
      severity: "medium",
      
      note: "Ex-owner of multiple questionable executors. Left exploiting scene to create malicious anti-cheat scripts targeting legitimate users.",
      
      references: [],
      
      created: "2022-05-25",
      verified: false
    }
  ],
  

  tagDefinitions: {
    "Malware": "Distributes or creates malicious software, rats, or harmful executors",
    "Paster": "Creates fake executors by copying/pasting existing code without credit",
    "Fraud": "Engages in scamming, deceptive practices, or financial fraud", 
    "Staff": "Former or current staff member of questionable projects",
    "Owner": "Owner or co-owner of malicious or defunct executor projects",
    "Exitscam": "Has performed exit scams, taking money and disappearing",
    "Alt-Hopping": "Uses multiple accounts/aliases to evade bans or detection",
    "Asshole": "Generally toxic behavior, harassment, or poor community conduct",
    "Inactive": "No longer active in the scene but left negative impact"
  },
  
  // Severity levels
  severityLevels: {
    "critical": "Extreme threat - avoid at all costs",
    "high": "Major threat - exercise extreme caution", 
    "medium": "Moderate threat - be cautious",
    "low": "Minor threat - be aware"
  }
};
