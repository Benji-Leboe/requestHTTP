const https = require('https');

let buff = '';

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML(options, callback){

  let reqOpts = options;

  https.get(reqOpts, (response) => {
    response.setEncoding('utf8');

    response.on('data', (data) => {
      console.log(`Chunk length received: ${data.length}`);
      buff += data.toString();
    });

    response.on('end', () => {
      console.log('Stream ended.');
      callback(buff);
    });
  });
}

function printHTML(html){
  console.log(html);
}

console.log(getHTML(requestOptions, printHTML));