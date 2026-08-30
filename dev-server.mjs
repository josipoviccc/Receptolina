import esbuild from "esbuild";
import http from "http";

const ctx = await esbuild.context({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outfile: "dist/bundle.js",
  loader: { ".png": "file", ".jpg": "file", ".css": "css", ".svg": "dataurl" },
  publicPath: "/dist/",
  define: { BASE_PATH: '""' },
});

await ctx.watch();

const { host, port } = await ctx.serve({
  servedir: ".",
  port: 8001,
});

http
  .createServer((req, res) => {
    const options = {
      hostname: host,
      port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    };

    const proxyReq = http.request(options, (proxyRes) => {
      if (proxyRes.statusCode === 404 && !req.url.includes(".")) {
        const fallbackOptions = { ...options, path: "/index.html" };
        const fallbackReq = http.request(fallbackOptions, (fallbackRes) => {
          res.writeHead(fallbackRes.statusCode, fallbackRes.headers);
          fallbackRes.pipe(res);
        });
        fallbackReq.end();
        return;
      }
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    });

    req.pipe(proxyReq);
  })
  .listen(8000, "0.0.0.0", () => {
    console.log("Dev server running on http://0.0.0.0:8000");
  });