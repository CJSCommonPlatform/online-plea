(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourCaseController', YourCaseController);

  YourCaseController.$inject = ['$stateParams', '$log', 'structureService', 'yourCaseStorage', 'state', 'formValidation'];

  function YourCaseController($stateParams, $log, structureService, yourCaseStorage, state, formValidation) {

    var vm = this;

    vm.continueButtonClicked = continueButtonClicked;
    vm.nextState = $stateParams.nextState;
    vm.getNextState = getNextState;
    vm.scrollToAnchor = state.scrollToAnchor;

    yourCaseStorage.updateVm(vm);

    //public

    function continueButtonClicked(event) {
      
      event.preventDefault();
      formValidation.validate(vm.form);
      
      if (!vm.form.invalid) {
        structureService.getCaseByUrnAndPostcode(vm)
        .then(getCaseByUrnAndPostcodeSucceed)
        .catch(getCaseByUrnAndPostcodeFailed)
      }
    }

    function getCaseByUrnAndPostcodeSucceed(response) {
      yourCaseStorage.updateSessionStorage(response.data);
      state.go(getNextState(vm));
    }

    function getCaseByUrnAndPostcodeFailed(error) {
      $log.error('XHR Failed for ' + error.method + ' ' + error.statusText);
    }

    function getNextState(vm) {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }

  }

})();