'use strict';
 
angular.module('mondial2014.controllers.nfl', ['mondial2014.services.nfl'])
  .controller('NFLController', ['$scope','$routeParams','NFL',
    function($scope, $routeParams, NFL) {
      $scope.nflteams = NFL.teams;
      $scope.nflteam = NFL.teams[$routeParams['nflTeamId']];
    }]);