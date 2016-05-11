(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('employment.out-of-work-benefits', {
          abstract: true,
          url: '/out-of-work-benefits',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('employment.out-of-work-benefits.finances', {
          url: '/finances',
          views : {
            '@' : { // here we are using absolute name targeting
              templateUrl: 'out-of-work-benefits-finances.html',
              controller: 'OutOfWorkBenefitsFinancesController' 
            }
          },
          data: {
            nextState: 'employment.out-of-work-benefits.finances.benefits'
          }
        })

        .state('employment.out-of-work-benefits.finances.benefits', {
          url: '/benefits',
          views : {
            '@' : {
              templateUrl : 'benefits.html',
              controller  : 'BenefitsController'
            }
          },
          data: {
            propertyName: 'financialProblems',
            constantName: 'yesNoAnswer',
            nextState: [
              {
                constantValue: 'YES',
                stateName: 'employment.out-of-work-benefits.finances.expenses.household'
              },
              {
                constantValue: "NO",
                stateName: 'confirm-plea'
              }
            ]
          }    
        })

        .state('employment.out-of-work-benefits.finances.expenses', {
          abstract: true,
          url: '/expenses',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('employment.out-of-work-benefits.finances.expenses.household', {
          url: '/household',
          views : {
            '@' : {
              templateUrl : 'household-expenses.html',
              controller  : 'HouseholdExpensesController'
            }
          },
          data: {
            nextState: '^.other'
          }
        })

        .state('employment.out-of-work-benefits.finances.expenses.other', {
          url: '/other',
          views: {
            '@': {
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