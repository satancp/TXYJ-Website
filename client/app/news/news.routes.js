'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/news', {
      template: '<news></news>'
    });
}
