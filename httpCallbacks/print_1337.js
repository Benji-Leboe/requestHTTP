const getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function to1337(html){
  let out1337 = html;
  const toReplace = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'}
  for(key in toReplace){
    let re = new RegExp(key, "g");
    out1337 = out1337.replace(re, toReplace[key]);
  }
  
  console.log(out1337);
}

getHTML(requestOptions, to1337);