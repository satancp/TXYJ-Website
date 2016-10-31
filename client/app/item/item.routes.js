'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/item', {
      template: '<item></item>'
    });
}
