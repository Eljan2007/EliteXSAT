/* ==========================================================================
   EliteXSAT — auto cache-buster
   Bumps every  ?v=N  in app.html and landing.html to the next number, so a
   returning visitor's browser always fetches the newest JS/CSS after a publish.
   Run automatically by Publish-Update.cmd before each git push.
   ========================================================================== */
const fs = require("fs");
const path = require("path");

const files = ["app.html", "landing.html"];
const here = (f) => path.join(__dirname, f);

// 1) Find the highest ?v=N currently used across the files.
let max = 0;
for (const f of files) {
  if (!fs.existsSync(here(f))) continue;
  const txt = fs.readFileSync(here(f), "utf8");
  let m; const re = /\?v=(\d+)/g;
  while ((m = re.exec(txt))) max = Math.max(max, parseInt(m[1], 10));
}

if (max === 0) { console.log("bump-version: no ?v= markers found — nothing to do."); process.exit(0); }

// 2) Set ALL of them to max+1 (keeps every asset on one consistent version).
const next = max + 1;
let updated = 0;
for (const f of files) {
  if (!fs.existsSync(here(f))) continue;
  const txt = fs.readFileSync(here(f), "utf8");
  const out = txt.replace(/\?v=\d+/g, "?v=" + next);
  if (out !== txt) { fs.writeFileSync(here(f), out); updated++; }
}

console.log(`bump-version: cache version -> ?v=${next}  (${updated} file(s) updated).`);
