// Renders scripts/og.html to public/og-de.png and public/og-en.png (1200x630). Run: node scripts/og.cjs
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const lang of ['de', 'en']) {
    await page.goto('file://' + path.resolve(__dirname, 'og.html') + '#' + lang);
    await page.reload();
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.resolve(__dirname, `../public/og-${lang}.png`) });
  }
  await browser.close();
})();
