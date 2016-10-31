'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/permission', {
      template: '<permission></permission>'
    });
}
