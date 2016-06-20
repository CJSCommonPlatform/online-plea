(function () {
  'use strict';

  angular
    .module('pleaApp')
    .component('errorSummaryItem', {
      templateUrl: 'app/components/common/error-summary/error-summary-item.html',
      controller: ErrorSummaryItemController,
      controllerAs: 'vm',
      bindings: {
        label: '@',
        scrollToId: '<',
        focusId: '<'
      }
    });


  // TODO: Move scrollToAnchor out of the 'state' service and depend on just it.
  /* @ngInject */
  function ErrorSummaryItemController (state) {
    var vm = this;

    vm.scrollToAnchor = state.scrollToAnchor;
  }
})();
