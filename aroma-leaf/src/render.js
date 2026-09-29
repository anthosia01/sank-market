// Génère les visuels PNG (1080×1350) de chaque thé : node src/render.js [id]
const path = require("path");
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");
const root = path.resolve(__dirname, "..");
global.window = {};
require(path.join(root, "site/data.js"));
const { PRODUCTS } = global.window.AL;

(async () => {
  const only = process.argv[2];
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  page.on("pageerror", e => console.error(e));
  for (const p of PRODUCTS.filter(x => !only || x.id === only)) {
    await page.goto(`file://${root}/src/post.html?id=${p.id}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const out = path.join(root, "visuels", `aroma-leaf-${p.id}.png`);
    await page.screenshot({ path: out });
    console.log("✓", out);
  }
  await browser.close();
})();
