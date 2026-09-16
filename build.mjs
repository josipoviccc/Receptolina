import esbuild from "esbuild";
import fs from "fs";
import "dotenv/config";

await esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outfile: "dist/bundle.js",
  loader: { ".png": "file", ".jpg": "file", ".css": "css", ".svg": "dataurl" },
  publicPath: "/",
  define: {
  BASE_PATH: JSON.stringify(""),
  "process.env.NODE_ENV": JSON.stringify("production"),
  "process.env.REACT_APP_SUPABASE_URL": JSON.stringify(process.env.REACT_APP_SUPABASE_URL),
  "process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY),
  "process": JSON.stringify({ env: { NODE_ENV: "production" } }),
},
});

let html = fs.readFileSync("index.html", "utf8");
html = html.replace('src="dist/bundle.js"', 'src="bundle.js"');
fs.writeFileSync("dist/index.html", html);

fs.mkdirSync("dist/src/assets", { recursive: true });
fs.copyFileSync("src/style.css", "dist/src/style.css");
fs.copyFileSync("src/assets/receptolina-logo.png", "dist/src/assets/receptolina-logo.png");

fs.writeFileSync("dist/CNAME", "receptolina.com");

// na sam kraj build.mjs fajla
console.log("Build završen:", new Date().toISOString());
console.log("URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("KEY:", process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY);