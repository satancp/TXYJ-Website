'use strict';

describe('Component: ItemComponent', function() {
  // load the controller's module
  beforeEach(module('shangyeApp.item'));

  var ItemComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ItemComponent = $componentController('item', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
