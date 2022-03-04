const fs = require('fs');
const pdf = require('html-pdf');

module.exports = function buildPdf(input, output) {
  const html = fs.readFileSync(input, 'utf8');
  const options = {
    format: 'Letter',
    orientation: 'portrait',
    border: '2.54cm',
    base: 'file://Users/jinkyulee/resume/src/assets/'
  };

  return new Promise((resolve, reject) => {
    pdf.create(html, options).toFile(output, function (err) {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve();
    });
  })
}
