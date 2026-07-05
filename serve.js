/* ===========================================================================
   EliteXSAT — tiny zero-dependency local server.
   Why: opening app.html as a file:// URL makes browsers cache the CSS/JS by
   filename, so edits don't show up without fighting the cache. Serving over
   http://localhost with "no-cache" headers means changes ALWAYS appear on a
   normal refresh.

   Run:   node serve.js       (or just double-click start.cmd)
   Open:  http://localhost:8080/app.html
   =========================================================================== */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = 8080;

const TYPE = {
  ".html": "text/html;charset=utf-8", ".js": "text/javascript;charset=utf-8",
  ".css": "text/css;charset=utf-8", ".json": "application/json", ".map": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif",
  ".svg": "image/svg+xml", ".webp": "image/webp", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf", ".pdf": "application/pdf",
};

http.createServer((req, res) => {
  let rel = decodeURIComponent((req.url || "/").split("?")[0]);
  if (rel === "/" || rel === "") rel = "/app.html";
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/plain" }); return res.end("Not found: " + rel); }
    res.writeHead(200, {
      "Content-Type": TYPE[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log("\n  EliteXSAT is running.");
  console.log("  Open:  http://localhost:" + PORT + "/app.html\n");
  console.log("  (Keep this window open — close it to stop the server.)\n");
});
