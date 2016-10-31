'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './news.routes';

export class NewsComponent {
  $route;
  real_name;
  route_name;
  real_name_index;
  route_cn;
  route_cn_index;
  /*@ngInject*/

  constructor($route) {
    this.$route = $route;
  }

  $onInit() {
    this.route_cn = ["main","主页","introduction","公司简介","permission","公司资质","item","仪器设备","honor","公司荣誉","news","新闻中心","project","项目展示","staff","人员简介","contact","联系我们"];
    this.getCurrentRouteName();
  }

  getCurrentRouteName() {
    this.route_name = this.$route.current.template;
    this.real_name_index = this.route_name.indexOf(">");
    this.real_name = this.route_name.substring(1, this.real_name_index);
    this.route_cn_index = this.route_cn.indexOf(this.real_name) + 1;
    this.real_name = this.route_cn[this.route_cn_index];
  }
}

export default angular.module('shangyeApp.news', [ngRoute])
  .config(routes)
  .component('news', {
    template: require('./news.html'),
    controller: NewsComponent,
    controllerAs: 'newsCtrl'
  })
  .name;
