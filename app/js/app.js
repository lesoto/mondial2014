'use strict';
var app = angular.module('mondial2014',
  [ 'mondial2014.config'
  , 'mondial2014.controllers.header'
  , 'mondial2014.controllers.signin'
  , 'mondial2014.controllers.signup'
  , 'mondial2014.controllers.worldcup'
  , 'mondial2014.controllers.games'
  , 'mondial2014.filters'
  , 'localization'
  , 'firebase'
  , 'ui.bootstrap'
  , 'ngRoute']
  )
