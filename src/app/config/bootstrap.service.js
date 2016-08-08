(function () {
  'use strict';

  angular
  .module('make-a-plea.bootstrap', [])
  .factory('BootstrapService', BootstrapService);

  /* @ngInject */
  function BootstrapService($q, $http) {
    return bootstrap;

    function bootstrap() {
      return $http.get('./app/config/app.config.json')
      .then(function (response) {
        angular.module('global-config')
        .value('globalConfig', response.data);
      });
    }
  }
})();
