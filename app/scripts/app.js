'use strict';

/**
 * @ngdoc overview
 * @name angularjsSelfApp
 * @description
 * # angularjsSelfApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsSelfApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.mask'
  ])
  .config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('main', {
        url:'/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('test', {
        url:'/test',
        templateUrl: 'views/test.html'
        // controller: 'AboutCtrl',
        // controllerAs: 'about'
      }).state('wizard',{
        abstract:true,
        url:'/wizard',
        template:'<div><h1>wizard</h1><div ui-view></div></div>'
      }).state('wizard.start',{
        url:'/step_1',
        templateUrl:'views/wizard/step_1.html'
      }).state('wizard.email',{
        url:'/step_2',
        templateUrl:'views/wizard/step_2.html'
      }).state('wizard.finish',{
        url:'/finish',
        templateUrl:'views/wizard/step_3.html'
      }).state('boostrapValidation',{
        url:'/boostrapValidation',
        templateUrl:'views/boostrapValidation/test.html'
      }).state('boostrapDatePicker',{
        url:'/boostrapDatePicker',
        templateUrl:'views/boostrapDatePicker/test.html',
        controller:'datePickerCtrl'
      });

      $urlRouterProvider.otherwise('main');
  });
angular.module('angularjsSelfApp').config(['$qProvider', function($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);
angular.module('angularjsSelfApp').config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

