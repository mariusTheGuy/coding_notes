// 'fs' is module that needs to be required
const fs = require("fs");
const projName = process.argv[2] || "Project";

// fs.mkdirSync("/Users/marius/Desktop/apple");
// fs.mkdirSync(projName);
fs.writeFileSync(`index.html`);
