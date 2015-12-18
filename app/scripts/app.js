'use strict';

/**
 * @ngdoc overview
 * @name testProxyAppApp
 * @description
 * # testProxyAppApp
 *
 * Main module of the application.
 */
angular
  .module('testProxyAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/signup', {
     templateUrl: 'views/signup.html',
     controller: 'SignupCtrl',
     controllerAs: 'signupForm'
   })
      .otherwise({
        redirectTo: '/'
      });
  });
