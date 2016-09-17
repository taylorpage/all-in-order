const expect = require('chai').expect;
const request = require('request');


describe('Routing', function() {

  const url = 'http://127.0.0.1:3000';

  describe('customer/create', function() {
    it('should create a new customer', function(done) {
      let req = {
        name: 'Jane Doe',
        state: 'Testing',
        property: 'Address',
        permalink: 'perma.link3'
      }

      request.post(`${url}/customer/create`, { form: req }, (data) => {
        done();
      })
    });
  });

  describe('customer/add/item', function() {
    it('should return all customer\'s data', function(done) {
      let req = {
        permalink: 'perma.link3',
        item: { name: 'test', status: 'test' }
      }

      request.post(`${url}/customer/add/item`, { form: req }, (data) => {
        done();
      })
    });
  });

  describe('customer/all', function() {
    it('should return all customer\'s data', function(done) {
      request(`${url}/customer/all`, (data) => {
        done();
      })
    });
    it('should contain proper data', function(done) {
      request(`${url}/customer/all`, (data) => {
        done();
      })
    });
  });

  describe('customer/items', function() {
    it('should return all customer\'s items', function(done) {
      const req = {
        permalink: 'perma.link3'
      };

      request.post(`${url}/customer/items`, { form: req }, (data) => {
        done();
      })
    });
  });

  describe('customer/status', function() {
    it('should return all customer\'s data', function(done) {
      const req = {
        permalink: 'perma.link3',
        item: { name: 'test', status: 'change' }
      }

      request.post(`${url}/customer/status`, { form: req }, (data) => {
        done();
      })
    });
  });
});