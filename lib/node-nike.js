'use strict';

var request = require('request'),
    url     = require('url'),
    Q       = require('q');

var baseUrl = 'https://api.nike.com';

function objToString(obj) {
  var output = '';  
  for (var key in obj) {
    var line = '&' + key + '=' + obj[key]; 
    output += line;
  }
  return output;
}

function Nike(token) {
  this.token = token;
}

Nike.prototype.get = function get(endpoint, type, params) {
  type = type || '';

  var paramsString = '';
  if (params) paramsString = objToString(params);

  var timestamp = new Date().getTime();
  var uri = baseUrl + endpoint + type + '?' + paramsString + 'access_token=' + this.token + '&_=' + timestamp;
  return Q.nfcall(request.get, uri);
};

module.exports = Nike;
