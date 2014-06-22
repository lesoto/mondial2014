'use strict';

angular.module('mondial2014.controllers.signin', ['mondial2014.services.login'])
    .controller('SigninCtrl', ['$scope', 'loginService', '$location',
        function ($scope, loginService, $location) {

            $scope.$on('angularFireAuth:login', function () {
                $location.path('/');
            })

            $scope.email = null;
            $scope.pass = null;
            $scope.name = null;

            $scope.login = function (callback) {
                $scope.err = null;
                loginService.login($scope.email, $scope.pass, '/', function (err, user) {
                    $scope.err = err || null;
                    typeof(callback) === 'function' && callback(err, user);
                });
            };
        }])
  