'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/introduction', {
      template: '<introduction></introduction>'
    });
}
