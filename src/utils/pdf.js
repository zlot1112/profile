const Puppeteer = require('puppeteer');

module.exports = async function buildPdf(inputFile, outputFile) {
  const browser = await Puppeteer.launch({
    ignoreDefaultArgs: ['--disable-extensions'],  headless: 'shell',
    args: ['--enable-gpu'],
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
  });
  const page = await browser.newPage();
  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle0'
  });
  await page.pdf({
    path: outputFile,
    format: 'A4',
    border: 0,
    margin: {
      top: '2.54cm',
      right: '2.54cm',
      bottom: '2.54cm',
      left: '2.54cm',
    },
  });
  await browser.close();
};
