(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

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
          views : {
            '@' : { // here we are using absolute name targeting
              templateUrl: 'other-finances.html',
              controller: 'OtherFinancesController' 
            }
          },
          data: {
            propertyName: 'data.pensionCredit',
            constantName: 'yesNoAnswer',
            nextState: [
              {
                constantValue: 'YES',
                stateName: 'employment.other.finances.pension-credit'
              },
              {
                constantValue: "NO",
                stateName: 'employment.other.finances.expenses'
              }
            ]
          }
        })
        

        .state('employment.other.finances.pension-credit', {
          url: '/pension-credit',
          views: {
            '@' : {
              templateUrl : 'pension-credit.html',
              controller  : 'PensionCreditController'
            }
          },
          data: {
            nextState: 'employment.other.finances.expenses'
          }
        })
        
        .state('employment.other.finances.expenses', {
          url: '/expenses',
          views: {
            '@' : {
              controller  : 'ForwardController',
            }
          },
          data: {
            propertyName: 'data.financialProblems',
            constantName: 'yesNoAnswer',
            nextState: [
              {
                constantValue: 'YES',
                stateName: 'employment.other.finances.expenses.household'
              },
              {
                constantValue: "NO",
                stateName: 'confirm-plea'
              }
            ]
          }
        })

        .state('employment.other.finances.expenses.household', {
          url: '/other',
          views: {
            '@' : {
              templateUrl : 'other-expenses.html',
              controller  : 'OtherExpensesController'
            }
          },
          data: {
            nextState: 'confirm-plea'
          }       
        })
        
    });  
})();