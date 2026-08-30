import fs from "fs";

// kopiraj index.html u dist i promijeni base href za GitHub Pages podputanju
let html = fs.readFileSync("index.html", "utf8");
html = html.replace('<base href="/">', '<base href="/RecipeBox/">');
fs.writeFileSync("dist/index.html", html);

// kopiraj CSS i ikonu na iste relativne putanje unutar dist
fs.mkdirSync("dist/src/assets", { recursive: true });
fs.copyFileSync("src/style.css", "dist/src/style.css");
fs.copyFileSync("src/assets/RecipeBoxLogo.svg", "dist/src/assets/RecipeBoxLogo.svg");