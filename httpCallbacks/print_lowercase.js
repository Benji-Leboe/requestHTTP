const getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function toLower(html){
  console.log(html.toLowerCase());
}

getHTML(requestOptions, toLower);