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
    vm.enterCaseUniqueReferenceNumberLinkClicked = enterCaseUniqueReferenceNumberLinkClicked;
    vm.enterCasePostcodeLinkClicked = enterCasePostcodeLinkClicked;
    vm.continueButtonClicked = continueButtonClicked;
    vm.caseUniqueReferenceNumberAriaInvalid = false;
    vm.caseUniqueReferenceNumberAriaDescribedBy = 'case-unique-reference-number-hint';
    vm.casePostcodeAriaInvalid = false;
    vm.casePostcodeAriaDescribedBy = 'case-postcode-hint';
    vm.nextState = $stateParams.nextState;
    vm.getNextState = getNextState;

    _updateViewModel();

    //public

    function enterCaseUniqueReferenceNumberLinkClicked() {
      vm.caseUniqueReferenceNumberFocused = true;
    }

    function enterCasePostcodeLinkClicked() {
      vm.casePostcodeFocused = true;
    }

    function continueButtonClicked(event) {
      event.preventDefault();
      
      updateFormProperties();
      
      updateCaseUniqueReferenceNumberAriaDescribedBy();
      updateCaseUniqueReferenceNumberAriaInvalid();

      updateCasePostcodeAriaDescribedBy();
      updateCasePostcodeAriaInvalid();

      updateShowErrorSummary();
      updateErrorSummaryFocus();

      updateSessionStorage();
      updateState();

    }

    //private

    function updateFormProperties() {
      vm.form.$submitted = true;
      vm.form.$myinvalid = vm.form.$invalid;
      vm.form['case-unique-reference-number'].$myinvalid = vm.form['case-unique-reference-number'].$invalid;
      vm.form['case-postcode'].$myinvalid = vm.form['case-postcode'].$invalid;
    }

    function updateErrorSummaryFocus() {
      vm.errorSummaryFocused = vm.form.$invalid;
    }

    function updateCaseUniqueReferenceNumberAriaDescribedBy() {
      vm.caseUniqueReferenceNumberAriaDescribedBy = vm.form['case-unique-reference-number'].$myinvalid ? 'error-message-case-unique-reference-number' : 'case-unique-reference-number-hint';
    }

    function updateCaseUniqueReferenceNumberAriaInvalid() {
      vm.caseUniqueReferenceNumberAriaInvalid = vm.form.$submitted && vm.form['case-unique-reference-number'].$myinvalid
    }

    function updateCasePostcodeAriaDescribedBy() {
      vm.casePostcodeAriaDescribedBy = vm.form['case-postcode'].$myinvalid ? 'error-message-case-postcode' : 'case-postcode-hint';
    }

    function updateCasePostcodeAriaInvalid() {
      vm.casePostcodeAriaInvalid = vm.form.$submitted && vm.form['case-postcode'].$myinvalid;
    }
    
    function _updateViewModel() {
      vm.caseUniqueReferenceNumber = get('caseUniqueReferenceNumber');
      vm.casePostcode = get('casePostcode');
    }

    function updateSessionStorage() {
      if (vm.form.$valid) {
        set('caseUniqueReferenceNumber', vm.caseUniqueReferenceNumber);
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