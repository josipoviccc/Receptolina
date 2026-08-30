import esbuild from "esbuild";
import fs from "fs";

await esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outfile: "dist/bundle.js",
  loader: { ".png": "file", ".jpg": "file", ".css": "css", ".svg": "dataurl" },
  publicPath: "/",
  define: { BASE_PATH: JSON.stringify("") },
});

let html = fs.readFileSync("index.html", "utf8");
html = html
  .replace('src="dist/bundle.js"', 'src="bundle.js"');
fs.writeFileSync("dist/index.html", html);

fs.mkdirSync("dist/src/assets", { recursive: true });
fs.copyFileSync("src/style.css", "dist/src/style.css");
fs.copyFileSync("src/assets/RecipeBoxLogo.svg", "dist/src/assets/RecipeBoxLogo.svg");