const fs = require("fs");
const path = require("path");

const jsFolder = path.join(__dirname, "..", "build", "static", "js");

// Trouver le fichier main.*.js
const files = fs.readdirSync(jsFolder);
const mainFile = files.find((f) => f.startsWith("main") && f.endsWith(".js"));

if (!mainFile) {
  console.error("main.*.js not found in build/static/js");
  process.exit(1);
}

const originalPath = path.join(jsFolder, mainFile);
const newPath = path.join(jsFolder, "main.js");

// Copier sans hash
fs.copyFileSync(originalPath, newPath);

console.log(`✔ Bundle React généré : static/js/main.js`);
