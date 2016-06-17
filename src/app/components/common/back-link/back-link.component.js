(function () {

  'use strict';

  angular
    .module('pleaApp')
    .component('backLink', {
      controller: BackLink,
      controllerAs: 'vm',
      template: '<a class="link-back" href="" data-ng-click="vm.goBack()" title="Go back to previous page">Back</a>',
    });

  function BackLink($window) {
    
    var vm    = this;
    vm.goBack = goBack;

    function goBack() {
      $window.history.back();
    }
  }

}());