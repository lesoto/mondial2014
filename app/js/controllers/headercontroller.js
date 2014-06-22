'use strict';

angular.module('mondial2014.controllers.header', ['mondial2014.services.login'])
    .controller('HeaderController', ['$scope', '$location', 'loginService', 'angularFire', 'FBURL',
        function ($scope, $location, loginService, angularFire, FBURL) {

            $scope.$on("angularFireAuth:login", function () {
                angularFire(new Firebase(FBURL + '/users/' + $scope.auth.id), $scope, 'user');
            });

            $scope.logout = function () {
                loginService.logout('/signin');
            };

            $scope.navbarEntries = [
                {
                    "title": "Teams",
                    "link": "/teams"
                },
                {
                    "title": "Groups",
                    "link": "/groups"
                },
                {
                    "title": "Games",
                    "link": "/games"
                },
                {
                    "title": "Contact Us",
                    "link": "/contact"
                }
            ];

            $scope.$on('$routeChangeSuccess', function () {
                $scope.navbarEntries.forEach(
                    function (data) {
                        data.isActive = ($location.path().indexOf(data.link) == 0);
                    }
                )
            })

        }])