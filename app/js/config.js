'use strict';

angular.module('mondial2014.config', [])

app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/',        { templateUrl: 'views/default.html' })
      .when('/signin',  { templateUrl: 'views/users/signin.html' })
      .when('/signup',  { templateUrl: 'views/users/signup.html' })
      .when('/teams',  { templateUrl: 'views/worldcup/list.html', authRequired: true })
      .when('/teams/:TeamId', { templateUrl: 'views/worldcup/view.html', authRequired: true })
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
