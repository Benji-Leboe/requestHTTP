const https = require('https');

let buff = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');
  
    response.on('data', (data) => {
      console.log(`Chunk length received: ${data.length}`);
      buff += data.toString();
    });
  
    response.on('end', () => {
      console.log('Response stream ended.');
      console.log(buff);
    });

  });

}

console.log(getAndPrintHTML());