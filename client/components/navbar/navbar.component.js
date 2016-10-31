'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';
import ipCookie from 'angular-cookie';

export class NavbarComponent {
  $location;
  $route;
  state_cookie;
  ipCookie;
  isCollapsed = true;

  constructor($location,ipCookie,$route) {
    'ngInject';

    this.$location = $location;
    this.$route = $route;
  }

  login() {
    alert("asd");
  }

  logout() {
    
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
