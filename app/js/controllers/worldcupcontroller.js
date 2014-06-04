'use strict';
 
angular.module('mondial2014.controllers.worldcup', ['mondial2014.services.worldcup'])
  .controller('WorldCupController', ['$scope','$routeParams','WorldCup',
    function($scope, $routeParams, WorldCup) {
      $scope.worldcupteams = WorldCup.teams;
      $scope.worldcupteam = WorldCup.teams[$routeParams['TeamId']];
    }]);