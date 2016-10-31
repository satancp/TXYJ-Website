'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var honorCtrlStub = {
  index: 'honorCtrl.index',
  show: 'honorCtrl.show',
  create: 'honorCtrl.create',
  upsert: 'honorCtrl.upsert',
  patch: 'honorCtrl.patch',
  destroy: 'honorCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var honorIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './honor.controller': honorCtrlStub
});

describe('Honor API Router:', function() {
  it('should return an express router instance', function() {
    honorIndex.should.equal(routerStub);
  });

  describe('GET /api/honors', function() {
    it('should route to honor.controller.index', function() {
      routerStub.get
        .withArgs('/', 'honorCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/honors/:id', function() {
    it('should route to honor.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'honorCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/honors', function() {
    it('should route to honor.controller.create', function() {
      routerStub.post
        .withArgs('/', 'honorCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/honors/:id', function() {
    it('should route to honor.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'honorCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/honors/:id', function() {
    it('should route to honor.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'honorCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/honors/:id', function() {
    it('should route to honor.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'honorCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
