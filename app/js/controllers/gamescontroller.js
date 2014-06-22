'use strict';

angular.module('mondial2014.controllers.games', [])
    .controller('GamesController', ['$scope', '$routeParams',
        function ($scope) {
            var dataRef = new Firebase('https://crackling-fire-8110.firebaseio.com/games/0/group');
            dataRef.startAt('A').endAt('A')
                .once('value', function (snap) {
                    alert('Group A - ', snap.val())
                });
        }]);