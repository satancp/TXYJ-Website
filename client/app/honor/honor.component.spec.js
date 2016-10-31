'use strict';

describe('Component: HonorComponent', function() {
  // load the controller's module
  beforeEach(module('shangyeApp.honor'));

  var HonorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    HonorComponent = $componentController('honor', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
