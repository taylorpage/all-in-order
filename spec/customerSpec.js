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

      request.post(`${url}/customer/create`, { form: req }, (err, data, body) => {

        body = JSON.parse(body);

        expect(body.name).to.equal('Jane Doe');
        expect(body.items).to.be.an('array');
        done();
      })
    });

    it('should create a second customer', function(done) {
      let req = {
        name: 'John Doe',
        state: 'Testing',
        property: 'Address',
        permalink: 'perma.link4'
      }

      request.post(`${url}/customer/create`, { form: req }, (err, data, body) => {

        body = JSON.parse(body);

        expect(body.name).to.equal('John Doe');
        expect(body.permalink).to.equal('perma.link4');
        done();
      })
    });
  });

  describe('customer/add/item', function() {
    it('should add an item to customer list', function(done) {
      let req = {
        permalink: 'perma.link3',
        item: { name: 'test', status: 'test' }
      }

      request.post(`${url}/customer/add/item`, { form: req }, (err, data, body) => {

        body = JSON.parse(body);

        expect(body.ok).to.equal(1);
        expect(body.nModified).to.equal(1);
        expect(body.n).to.equal(1);
        done();
      })
    });
  });

  describe('customer/all', function() {
    it('should return all customer\'s data', function(done) {
      request(`${url}/customer/all`, (err, data, body) => {

        body = JSON.parse(body);

        expect(body).to.have.length(2);
        expect(body[0]).to.have.property('permalink');
        expect(body[1]).to.have.property('permalink');
        done();
      })
    });
  });

  describe('customer/items', function() {
    it('should return all customer\'s items', function(done) {
      const req = {
        permalink: 'perma.link3'
      };

      request.post(`${url}/customer/items`, { form: req }, (err, data, body) => {

        body = JSON.parse(body);

        expect(body).to.have.length(1);
        expect(body[0]).to.have.property('name');
        expect(body[0]).to.have.property('status');
        done();
      })
    });
  });

  describe('customer/status', function() {
    it('should return all customer\'s data', function(done) {
      const req = {
        permalink: 'perma.link3',
        item: { name: 'test', status: 'changed' }
      }

      request.post(`${url}/customer/status`, { form: req }, (err, data, body) => {
        request.post(`${url}/customer/items`, { form: req }, (err, data, body) => {

          body = JSON.parse(body);

          expect(body[0].status).to.equal('changed')
          done();
        });
      })
    });
  });
});