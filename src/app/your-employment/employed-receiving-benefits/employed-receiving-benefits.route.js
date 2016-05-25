(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-employment.employed-receiving-benefits', {
          abstract: true,
          url: '/employed-receiving-benefits',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('your-employment.employed-receiving-benefits.finances', {
          url: '/finances',
          views: {
            '@': {
              templateUrl : 'app/your-employment/employed-receiving-benefits/finances/employed-receiving-benefits.html',
              controller  : 'YourEmploymentFinancesController',
              controllerAs: 'employedBenefitsFinances'
            }
          },
          data: {
            nextState: 'your-benefits'
          }
        })
    });
})();
