(function() {
  'use strict';

  angular
    .module('pleaApp', [
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
