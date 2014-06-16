angular.module("mondial2014")
.directive("footer", function() {
  return {
    restrict: 'A',
    templateUrl: 'views/footer.html',
    scope: true,
    transclude : false,
    controller: 'FooterController'
  };
});
