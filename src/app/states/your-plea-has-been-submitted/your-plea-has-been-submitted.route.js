(function() {

  'use strict';

  angular.module('pleaApp')

    .config(function($stateProvider) {
      $stateProvider
        .state('your-plea-has-been-submitted', {
          url: '/your-plea-has-been-submitted',
          templateUrl: 'app/states/your-plea-has-been-submitted/your-plea-has-been-submitted.html',
          controller: 'YourPleaHasBeenSubmittedController',
          controllerAs: 'vm',
          data: {
            nextState: 'index'
          }
        })
    });
})();
