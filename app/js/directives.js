'use strict';

angular.module("mondial2014")
.directive("footer", function() {
	return {
        restrict: 'E',
        template: '<div class="footer"><div class="container"><div class="row"><div class="col-md-8"><div class="footer-copyright" data-i18n="_CopyrightText_"></div></div><div class="col-md-4" ng-controller="LanguageCtrl"><a href="#" ng-click="setEnglishLanguage()">English</a> | <a href="#" ng-click="setSpanishLanguage()">Spanish</a> | <a href="#" ng-click="setRussianLanguage()">Russian</a></div></div></div></div>',
        //templateUrl: 'views/footer.html',
        replace: true,
        transclude: true,
    }
});