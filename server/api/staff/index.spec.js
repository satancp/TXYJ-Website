'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var staffCtrlStub = {
  index: 'staffCtrl.index',
  show: 'staffCtrl.show',
  create: 'staffCtrl.create',
  upsert: 'staffCtrl.upsert',
  patch: 'staffCtrl.patch',
  destroy: 'staffCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var staffIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './staff.controller': staffCtrlStub
});

describe('Staff API Router:', function() {
  it('should return an express router instance', function() {
    staffIndex.should.equal(routerStub);
  });

  describe('GET /api/staffs', function() {
    it('should route to staff.controller.index', function() {
      routerStub.get
        .withArgs('/', 'staffCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/staffs/:id', function() {
    it('should route to staff.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'staffCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/staffs', function() {
    it('should route to staff.controller.create', function() {
      routerStub.post
        .withArgs('/', 'staffCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/staffs/:id', function() {
    it('should route to staff.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'staffCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/staffs/:id', function() {
    it('should route to staff.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'staffCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/staffs/:id', function() {
    it('should route to staff.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'staffCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
