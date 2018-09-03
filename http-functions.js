module.exports = function getHTML (options, callback) {
  const https = require('https');
  let buff = '';
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
};