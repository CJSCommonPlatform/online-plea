(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-employment.self-employed-and-also-receiving-benefits', {

            abstract: true,
            url: '/self-employed-and-also-receiving-benefits',
            // Note: abstract still needs a ui-view for its children to populate.
            // You can simply add it inline here.
            template: '<ui-view/>'
        })

        .state('your-employment.self-employed-and-also-receiving-benefits.finances', {

          url: '/finances',
          views: {
            '@': {
              templateUrl : 'app/your-employment/self-employed-and-also-receiving-benefits/finances/self-employed-and-also-receiving-benefits.html',
              controller  : 'YourEmploymentFinancesController',
              controllerAs: 'vm'
            }
          },
          params: {
            nextState: undefined
          },
          data: {
            nextState: 'your-benefits'
          }
        })
    });
})();
