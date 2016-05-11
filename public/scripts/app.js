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

.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
  
    .state('employment.other', {
        abstract: true,
        url: '/other',
        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
    })

    .state('employment.other.finances', {
      url: '/finances',
      views: {
        '@' : {
          templateUrl : 'other-finances.html',
          controller  : 'OtherFinancesController'
        }
      }
    })

  .state('your-expenses/other', {
    url: '/your-expenses/other',
    templateUrl : 'other-expenses.html',
    controller  : 'otherExpensesController'
  })
});

