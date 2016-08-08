(function () {
  'use strict';

  var injector = angular.injector(['ng', 'make-a-plea.bootstrap']);
  var bootstrap = injector.get('BootstrapService');

  bootstrap()
  .then(function () {
    angular.element(document).ready(function () {
      angular.bootstrap(angular.element('main#content'), ['pleaApp']);
    });
  });
}());
