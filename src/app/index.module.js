(function() {
  'use strict';

  angular
    .module('pleaApp', [
      'cpp-ui-spa-master.structure',
      'ngStorage',
      'ngCookies',
      'ngSanitize',
      'ngMessages',
      'restangular',
      'ui.router',
      'ui.validate',
      'toastr',
      'ngLodash'
    ]);
})();
