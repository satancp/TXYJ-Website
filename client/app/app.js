'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ipCookie from 'angular-cookie';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';
const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import introduction from './introduction/introduction.component';
import item from './item/item.component';
import honor from './honor/honor.component';
import permission from './permission/permission.component';
import contact from './contact/contact.component';
import news from './news/news.component';
import project from './project/project.component';
import staff from './staff/staff.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import './app.css';

angular.module('shangyeApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', ngRoute,
    uiBootstrap, navbar, footer, main, introduction, news, permission, contact, project, staff, item, honor, constants, socket, util, ipCookie
  ])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['shangyeApp'], {
      strictDi: true
    });
  });
