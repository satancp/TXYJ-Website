'use strict';

describe('Component: IntroductionComponent', function() {
  // load the controller's module
  beforeEach(module('shangyeApp.introduction'));

  var IntroductionComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    IntroductionComponent = $componentController('introduction', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
