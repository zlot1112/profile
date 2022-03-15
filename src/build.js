const handlebars = require('handlebars');
const fs = require('fs-extra');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');
const Puppeteer = require('puppeteer');
const dayjs = require('dayjs');
const repoName = require('git-repo-name');
const username = require('git-username');

const srcDir = __dirname;
const outputDir = __dirname + '/../dist';

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);

// Build HTML
handlebars.registerHelper('markdown', markdownHelper);
const source = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const template = handlebars.compile(source);
const pdfFileName = 'LEEJINKYU.pdf';
const html = template({
  ...templateData,
  baseUrl: `https://${username()}.github.io/${repoName.sync()}`,
  pdfFileName,
  updated: dayjs().format('MMMM D, YYYY'),
});
fs.writeFileSync(outputDir + '/index.html', html);

handlebars.registerHelper('markdown', markdownHelper);
const pdfSource = fs.readFileSync(srcDir + '/templates/pdfindex.html', 'utf-8');
const pdfTemplate = handlebars.compile(pdfSource);
const pdfHtml = pdfTemplate({
  ...templateData,
  baseUrl: `https://${username()}.github.io/${repoName.sync()}`,
  pdfFileName,
  updated: dayjs().format('MMMM D, YYYY'),
});
fs.writeFileSync(outputDir + '/pdfindex.html', pdfHtml);

buildPdf = async function (inputFile, outputFile) {
  const browser = await Puppeteer.launch({
    executablePath: '/opt/homebrew/bin/chromium' }
      );
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

// Build PDF
buildPdf(`${outputDir}/pdfindex.html`, `${outputDir}/${pdfFileName}`);
