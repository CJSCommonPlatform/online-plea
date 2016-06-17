(function () {

  'use strict';

  angular
    .module('pleaApp')
    .controller('BackLink', BackLink)
    .component('backLink', {
      controller: 'BackLink',
      controllerAs: 'vm',
      template: '<a class="link-back" href="" data-ng-click="vm.goBack()">Back</a>',
    });

  function BackLink($window) {
    
    var vm    = this;
    vm.goBack = goBack;

    function goBack() {
      $window.history.back();
    }
  }
  
}());