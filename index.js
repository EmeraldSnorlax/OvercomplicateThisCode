const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/emn178/js-sha256/master/src/sha256.js', (res) => {
  const path = `${__dirname}/files/img.jpeg`;
  const filePath = fs.createWriteStream('./sha256.js');
  res.pipe(filePath);
  filePath.on('finish', () => {
    filePath.close();
    const sha256 = require('./sha256');


    let success = false;
    while (!success) {
      let firstTwelveLettersOfHash = sha256.array(fs.readFileSync('./index.js'))
        .slice(0, 12);

      firstTwelveLettersOfHash = String.fromCharCode(...firstTwelveLettersOfHash);
      console.log(firstTwelveLettersOfHash);
      if (firstTwelveLettersOfHash === 'Hello World!') {
        console.log(firstTwelveLettersOfHash);
        success = true;
      } else {
        fs.appendFileSync('./index.js', Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));
      }
    }
  })
})

//