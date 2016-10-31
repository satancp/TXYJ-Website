'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/staff', {
      template: '<staff></staff>'
    });
}
