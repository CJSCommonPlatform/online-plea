// ==========================================================================
// App
// ==========================================================================


'use strict';


var pleaApp = angular.module('pleaApp', [
  'ngStorage',
  'ngRoute', 
  'ngSanitize',
  'ui.router'
])

.run(function(backLink) {
  backLink.registerOnStateChangeSuccess();
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

});
