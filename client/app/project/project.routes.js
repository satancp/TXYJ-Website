'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/project', {
      template: '<project></project>'
    });
}
