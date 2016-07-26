(function() {
  'use strict';

  angular.module('global-config', [])
    .value('globalConfig', {
      apiRoot: 'http://test'
    });
})();
