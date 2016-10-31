'use strict';

describe('Component: PermissionComponent', function() {
  // load the controller's module
  beforeEach(module('shangyeApp.permission'));

  var PermissionComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PermissionComponent = $componentController('permission', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
