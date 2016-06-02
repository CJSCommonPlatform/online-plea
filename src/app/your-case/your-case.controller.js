(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourCaseController', YourCaseController);

  YourCaseController.$inject = ['sessionStorage', 'state', '$stateParams'];

  function YourCaseController(sessionStorage, state, $stateParams) {
    var vm = this;

    var BASE_NAME = 'pleaApp.yourCase.';
    var get = sessionStorage.getGetter(BASE_NAME);
    var set = sessionStorage.getSetter(BASE_NAME);

    vm.buttonContinueLabel = angular.isDefined($stateParams.nextState) ? 'Change and continue' : 'Save and continue';
    vm.showErrorSummary = false;
    vm.enterCaseNumberLinkClicked = enterCaseNumberLinkClicked;
    vm.enterCasePostcodeLinkClicked = enterCasePostcodeLinkClicked;
    vm.continueButtonClicked = continueButtonClicked;
    vm.caseNumberAriaInvalid = false;
    vm.caseNumberAriaDescribedBy = 'case-number-hint';
    vm.casePostcodeAriaInvalid = false;
    vm.casePostcodeAriaDescribedBy = 'case-postcode-hint';
    vm.nextState = $stateParams.nextState;
    vm.getNextState = getNextState;

    _updateViewModel();

    //public

    function enterCaseNumberLinkClicked() {
      vm.caseNumberFocused = true;
    }

    function enterCasePostcodeLinkClicked() {
      vm.casePostcodeFocused = true;
    }

    function continueButtonClicked(event) {
      event.preventDefault();
      
      updateFormProperties();
      
      updateNumberAriaDescribedBy();
      updateNumberAriaInvalid();

      updatePostcodeAriaDescribedBy();
      updatePostcodeAriaInvalid();

      updateShowErrorSummary();
      updateErrorSummaryFocus();

      updateSessionStorage();
      updateState();
    }

    //private

    function updateFormProperties() {
      vm.form.$submitted = true;
      vm.form.$myinvalid = vm.form.$invalid;
      vm.form.caseNumber.$myinvalid = vm.form.caseNumber.$invalid;
      vm.form.casePostcode.$myinvalid = vm.form.casePostcode.$invalid;
    }

    function updateErrorSummaryFocus() {
      vm.errorSummaryFocused = vm.form.$invalid;
    }

    function updateNumberAriaDescribedBy() {
      vm.caseNumberAriaDescribedBy = vm.form.caseNumber.$myinvalid ? 'error-message-case-number' : 'case-number-hint';
    }

    function updateNumberAriaInvalid() {
      vm.caseNumberAriaInvalid = vm.form.$submitted && vm.form.caseNumber.$myinvalid
    }

    function updatePostcodeAriaDescribedBy() {
      vm.casePostcodeAriaDescribedBy = vm.form.casePostcode.$myinvalid ? 'error-message-case-postcode' : 'case-postcode-hint';
    }

    function updatePostcodeAriaInvalid() {
      vm.casePostcodeAriaInvalid = vm.form.$submitted && vm.form.casePostcode.$myinvalid;
    }
    
    function _updateViewModel() {
      vm.caseNumber = get('caseNumber');
      vm.casePostcode = get('casePostcode');
    }

    function updateSessionStorage() {
      if (vm.form.$valid) {
        set('caseNumber', vm.caseNumber);
        set('casePostcode', vm.casePostcode);
      }
    }

    function updateState() {
      if (vm.form.$valid) {
        state.go(getNextState(vm));
      }
    }

    function updateShowErrorSummary() {
      vm.showErrorSummary = vm.form.$submitted && vm.form.$myinvalid;
    }

    function getNextState(vm) {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }
  }

})();