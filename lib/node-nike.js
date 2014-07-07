'use strict';

var request = require('request'),
    Q       = require('q');

var baseUrl = 'https://api.nike.com';

exports.sport = function(token) {
  var uri = baseUrl + '/v1/me/sport?access_token=' + token;
  return Q.nfcall(request.get, uri)
   .then(function(json) {
      console.log('sport-json: ', json);
      return json;
   });
};

/*
 *  Activities API call
 *
 *  @param - {options hash} - takes offset, count, startDate, and endDate
 */
exports.activities = function(token, options) {
  var optionString = '';
  options ? optionString = objToString(options) : ''; 
  var uri = baseUrl + '/v1/me/sport/activities?access_token=' + token + optionString;
  return Q.nfcall(request.get, uri)
   .then(function(json) {
      console.log('sport-json: ', json);
      return json;
   });
};

function objToString(obj) {
  var output = '';  
  for (var key in obj) {
    var output += '&' + key + '=' obj[key];
  }
  return output;
};  
