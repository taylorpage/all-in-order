const expect = require('chai').expect;
const request = require('request');


describe('Routing', function() {

  const url = 'http://127.0.0.1:3000';

  describe('admin/create', function() {
    it('should create a new admin', function(done) {
      let req = {
        name: 'Jane Doe',
        email: 'janedoe@email.com',
        password: 'TestPassword'
      }

      request.post(`${url}/admin/create`, { form: req }, (err, data, body) => {

        body = JSON.parse(body);

        expect(body.name).to.equal('Jane Doe');
        expect(body.email).to.equal('janedoe@email.com');
        done();
      })
    });
  });

  describe('admin/signin', function() {
    it('should sign admin in', function(done) {
      let req = {
        email: 'janedoe@email.com',
        password: 'TestPassword'
      }

      request.post(`${url}/admin/signin`, { form: req }, (err, data, body) => {

        body = JSON.parse(body);

        expect(body).to.equal(true);
        done();
      })
    });

    it('should detect incorrect password', function(done) {
      let req = {
        email: 'janedoe@email.com',
        password: 'WrongPassword'
      }

      request.post(`${url}/admin/signin`, { form: req }, (err, data, body) => {

        body = JSON.parse(body);

        expect(body).to.equal(false);
        done();
      })
    });
  });
});
