(function () {

  'use strict';

  angular.module('pleaApp')
    .config(function ($stateProvider) {

      $stateProvider
        .state('your-fine', {
          url: '/your-fine',
          templateUrl: 'app/your-fine/your-fine.html'
        })
    });

})();