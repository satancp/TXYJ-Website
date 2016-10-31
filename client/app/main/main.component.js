import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
  $http;
  socket;
  awesomeThings = [];
  newThing = '';
  $route;
  real_name;
  route_name;
  real_name_index;
  route_cn;
  route_cn_index;

  /*@ngInject*/
  constructor($http, $scope, socket, $route) {
    this.$http = $http;
    this.socket = socket;
    this.$route = $route;
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.route_cn = ["main","主页","introduction","公司简介","permission","公司资质","item","仪器设备","honor","公司荣誉","news","新闻中心","project","项目展示","staff","人员简介","contact","联系我们"];
    this.getCurrentRouteName();
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }

  getCurrentRouteName() {
    this.route_name = this.$route.current.template;
    this.real_name_index = this.route_name.indexOf(">");
    this.real_name = this.route_name.substring(1, this.real_name_index);
    this.route_cn_index = this.route_cn.indexOf(this.real_name) + 1;
    this.real_name = this.route_cn[this.route_cn_index];
  }
}

export default angular.module('shangyeApp.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
