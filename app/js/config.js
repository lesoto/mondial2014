'use strict';

angular.module('fantasyApp.config', [])

app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/',        { templateUrl: 'views/default.html' })
      .when('/signin',  { templateUrl: 'views/users/signin.html' })
      .when('/signup',  { templateUrl: 'views/users/signup.html' })
      .otherwise(       { redirectTo: '/' });
    }])
  
  .run(['angularFireAuth', 'FBURL', '$rootScope', 
    function(angularFireAuth, FBURL, $rootScope) {
      angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/signin'});
      $rootScope.FBURL = FBURL;
    }])

  .constant('FBURL', 'https://crackling-fire-8110.firebaseio.com/')

function LanguageCtrl($scope, localize) {

    $scope.setEnglishLanguage = function() {
        localize.setLanguage('en-US');
    };

    $scope.setSpanishLanguage = function() {
        localize.setLanguage('es-US');
    };

    $scope.setRussianLanguage = function() {
        localize.setLanguage('ru-RU');
    };
  }
