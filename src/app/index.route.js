(function() {
  'use strict';

  angular
    .module('pleaApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
  }

})();
