(function () {

  'use strict';

  angular.module('pleaApp')
    /* @ngInject */
    .config(function ($stateProvider) {

      $stateProvider
        .state('your-fine', {
          url: '/your-fine',
          templateUrl: 'app/states/your-fine/your-fine.html'
        })
    });

})();
