'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/honor', {
      template: '<honor></honor>'
    });
}
