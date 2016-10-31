'use strict';

var app = require('../..');
import request from 'supertest';

var newHonor;

describe('Honor API:', function() {
  describe('GET /api/honors', function() {
    var honors;

    beforeEach(function(done) {
      request(app)
        .get('/api/honors')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          honors = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      honors.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/honors', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/honors')
        .send({
          name: 'New Honor',
          info: 'This is the brand new honor!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newHonor = res.body;
          done();
        });
    });

    it('should respond with the newly created honor', function() {
      newHonor.name.should.equal('New Honor');
      newHonor.info.should.equal('This is the brand new honor!!!');
    });
  });

  describe('GET /api/honors/:id', function() {
    var honor;

    beforeEach(function(done) {
      request(app)
        .get(`/api/honors/${newHonor._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          honor = res.body;
          done();
        });
    });

    afterEach(function() {
      honor = {};
    });

    it('should respond with the requested honor', function() {
      honor.name.should.equal('New Honor');
      honor.info.should.equal('This is the brand new honor!!!');
    });
  });

  describe('PUT /api/honors/:id', function() {
    var updatedHonor;

    beforeEach(function(done) {
      request(app)
        .put(`/api/honors/${newHonor._id}`)
        .send({
          name: 'Updated Honor',
          info: 'This is the updated honor!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedHonor = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedHonor = {};
    });

    it('should respond with the original honor', function() {
      updatedHonor.name.should.equal('New Honor');
      updatedHonor.info.should.equal('This is the brand new honor!!!');
    });

    it('should respond with the updated honor on a subsequent GET', function(done) {
      request(app)
        .get(`/api/honors/${newHonor._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let honor = res.body;

          honor.name.should.equal('Updated Honor');
          honor.info.should.equal('This is the updated honor!!!');

          done();
        });
    });
  });

  describe('PATCH /api/honors/:id', function() {
    var patchedHonor;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/honors/${newHonor._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Honor' },
          { op: 'replace', path: '/info', value: 'This is the patched honor!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedHonor = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedHonor = {};
    });

    it('should respond with the patched honor', function() {
      patchedHonor.name.should.equal('Patched Honor');
      patchedHonor.info.should.equal('This is the patched honor!!!');
    });
  });

  describe('DELETE /api/honors/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/honors/${newHonor._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when honor does not exist', function(done) {
      request(app)
        .delete(`/api/honors/${newHonor._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
