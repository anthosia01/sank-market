// Génère le catalogue PDF et le logo SVG : node src/catalogue.js
const path = require("path"), fs = require("fs");
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");
const root = path.resolve(__dirname, "..");
global.window = {}; require(path.join(root, "site/data.js"));
const { logoMark } = global.window.AL;
(async () => {
  fs.writeFileSync(path.join(root, "brand/aroma-leaf-embleme.svg"), logoMark("#c9a24a", "#0f3328"));
  fs.writeFileSync(path.join(root, "brand/aroma-leaf-embleme-or.svg"), logoMark("#c9a24a"));
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto(`file://${root}/src/catalogue.html`, { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: path.join(root, "catalogue-aroma-leaf.pdf"), width: "1080px", height: "1350px", printBackground: true });
  await p.setViewportSize({ width: 1080, height: 1350 });
  await p.screenshot({ path: path.join(root, "visuels/aroma-leaf-couverture.png") });
  await b.close(); console.log("✓ catalogue");
})();
