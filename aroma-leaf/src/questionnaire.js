// Génère la fiche de validation A4 à imprimer : node src/questionnaire.js
const path = require("path");
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");
const root = path.resolve(__dirname, "..");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto(`file://${root}/src/questionnaire.html`, { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: path.join(root, "questionnaire-validation-aroma-leaf.pdf"), format: "A4", printBackground: true, preferCSSPageSize: true });
  await b.close(); console.log("✓ questionnaire");
})();
