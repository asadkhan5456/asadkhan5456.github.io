// Renders scripts/og.html to public/og.png (1200x630). Run: node scripts/og.cjs
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto('file://' + path.resolve(__dirname, 'og.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.resolve(__dirname, '../public/og.png') });
  await browser.close();
})();
