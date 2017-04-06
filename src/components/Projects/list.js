const skillsList = ["Nodejs", "express", "Mongodb", "React", "HTML", "CSS", "Javascript",
  "Python", "Angular2", "AWS", "MySQL"];

const projectList = [{
  "title": "Mozilla Devtools",
  "url": "https://github.com/devtools-html",
  "github": "https://github.com/devtools-html/debugger.html",
  "description": "Contributed to the debugger application of developer tools build into mozilla firefox.",
  "role": "Open source contributor",
  "image": "img/debug.png",
  "tech": ["react", "html", "css"]
}, {
    "title": "Techspardha Backend",
    "url": "http://techspardha.org",
    "github": "https://github.com/gawdsnitkkr/techspardha-17-backend",
    "description": "It's the  annual techfest of NIT Kurukshetra, We did built it's API for web and mobile applications. It was really a good learning experience, I wish to work more of such kind of projects.",
    "role": "Backend lead",
    "image": "img/techsp.png",
    "tech": ["nodejs", "mysql", "sequelize"]
  }, {
    "title": "Obscura",
    "url": "http://obscuranitkkr.co.in",
    "github": "https://github.com/AnshulMalik/obscura-4-backend",
    "description": "International crypthunt, people solve tricky puzzles online. Some technical minds try to hack the website, so it's really awesome to develop an application that is secure enough. Looking for people who can work on coming versions of Obscura",
    "role": "Web lead",
    "image": "img/obsc.png",
    "tech": ["react", "nodejs", "html", "express", "mongodb"]
  }, {
    "title": "Techspardha Admin Panel",
    "url": "http://techspardha.org/admin",
    "github": "https://github.com/gawdsnitkkr/techspardha-17-admin",
    "description": "Admin panel for event managers, lets the coordinator of event to make changes to the event timings, details, notify participants by a single click.",
    "role": "Head",
    "image": "img/techsp.png",
    "tech": ["angular2", "html", "css"]
  }, {
    "title": "Chrome Screenshot",
    "url": "https://github.com/AnshulMalik/chrome-screenshot",
    "github": "https://github.com/AnshulMalik/chrome-screenshot",
    "description": "Easy and quick screenshot, chrome extension",
    "role": "Head",
    "image": "img/sc.png",
    "tech": ["javascript", "html", "css", "chrome"]
  }, {
    "title": "api-to-object",
    "url": "https://www.npmjs.com/package/api-to-object",
    "github": "https://github.com/AnshulMalik/api-to-object",
    "description": "Convert given api to easy to use functions (NPM Package)",
    "role": "Head",
    "image": "img/api.png",
    "tech": ["javascript", "html", "css", "chrome"]
  }
];

/*
  This map maps a techs to projects, so that I can
  show projects involving a specific tech, really quickly
*/
let map = new Map();
for(let proj of projectList) {
  for(let tech of proj.tech) {
    if(map.has(tech)) {
      map.set(tech, [...map.get(tech), proj]);
    }
    else {
      map.set(tech, [proj]);
    }
  }
}

export default {
  projectList,
  skillsList,
  skillProjects: map
};
