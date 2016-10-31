'use strict';

describe('Component: StaffComponent', function() {
  // load the controller's module
  beforeEach(module('shangyeApp.staff'));

  var StaffComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    StaffComponent = $componentController('staff', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
