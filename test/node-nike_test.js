'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var sinon = require('sinon');
var Q = require('q');
require('sinon-as-promised')(Q);

var request = require('request');

var config = require('../.env.json');

var Nike = require('../lib/node-nike.js');

var apiKey = 'testKey', 
    environ = 'fake';

if (config) {
  try {
    apiKey = config.NIKE_API_KEY;
    environ = 'live';
  } catch(e) {
  }
}

var nike = new Nike(apiKey);

describe('Nike constructor', function() {
  it('nike should be an instance of Nike', function() {
    expect(nike).to.be.an.instanceof(Nike);
  });

  it('should have `token` and `get` properties', function() {
    expect(nike).to.have.property('token');
    expect(nike).to.have.property('get');
  });
});

describe('GET /v1/me/sport', function() {
  it('should call `Q.nfcall` with the correct url', function(done) {
    sinon.spy(Q, 'nfcall');
    nike.get('/v1/me/sport');

    expect(Q.nfcall.calledOnce).to.be.ok; 
    expect(Q.nfcall.getCall(0).args[1]).to.match(/\/v1\/me\/sport/);
    done();
  });

  it('should return response', function(done) {
    this.timeout = 10000;
    var sport = nike.get('/v1/me/sport');
    if (environ === 'fake') {
      sinon.stub().resolves(sport)()
        .then(function(response) {
          expect(response).to.be.an('object');
        });
    }
    sport
      .then(function(response) {
        expect(typeof response).to.equal('object');
        expect(response).to.include('body');
        expect(response.body).to.be.an('object');
      });
    done();
  });

});

