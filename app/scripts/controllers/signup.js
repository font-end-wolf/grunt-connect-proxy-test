'use strict';

/**
 * @ngdoc function
 * @name testProxyAppApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the testProxyAppApp
 */

angular.module('testProxyAppApp')
   .controller('SignupCtrl', function ($scope, $http, $log) {
     $scope.signup = function() {
       var payload = {
         email : $scope.email,
         password : $scope.password
       };

       $http.post('api/signup', payload)
           .success(function(data) {
             $log.debug(data);
           });
     };
   });