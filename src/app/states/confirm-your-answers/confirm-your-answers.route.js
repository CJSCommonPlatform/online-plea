(function() {

  'use strict';

  angular.module('pleaApp')
    /* @ngInject */
    .config(function($stateProvider) {
      $stateProvider
        .state('confirm-your-answers', {
          url: '/confirm-your-answers',
          templateUrl: 'app/states/confirm-your-answers/confirm-your-answers.html',
          controller: 'ConfirmYourAnswersController',
          controllerAs: 'confirmPlea',
          data: {
            nextState: 'declaration'
          }
        })
    });
})();
