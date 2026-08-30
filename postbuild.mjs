import fs from "fs";

let html = fs.readFileSync("index.html", "utf8");
html = html
  .replace('<base href="/">', '<base href="/RecipeBox/">')
  .replace('src="dist/bundle.js"', 'src="bundle.js"');
fs.writeFileSync("dist/index.html", html);

fs.mkdirSync("dist/src/assets", { recursive: true });
fs.copyFileSync("src/style.css", "dist/src/style.css");
fs.copyFileSync("src/assets/RecipeBoxLogo.svg", "dist/src/assets/RecipeBoxLogo.svg");