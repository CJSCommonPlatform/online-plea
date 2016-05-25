(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourCaseController', YourCaseController);

  YourCaseController.$inject = ['sessionStorage', 'state'];

  function YourCaseController(sessionStorage, state) {
    var vm = this;

    var BASE_NAME = 'pleaApp.yourCase.';
    var get = sessionStorage.getGetter(BASE_NAME);
    var set = sessionStorage.getSetter(BASE_NAME);

    vm.showErrorSummary = false;
    vm.enterCaseReferenceLinkClicked = enterCaseReferenceLinkClicked;
    vm.enterCasePostcodeLinkClicked = enterCasePostcodeLinkClicked;
    vm.continueButtonClicked = continueButtonClicked;
    vm.caseReferenceAriaInvalid = false;
    vm.caseReferenceAriaDescribedBy = 'case-reference-hint';
    vm.casePostcodeAriaInvalid = false;
    vm.casePostcodeAriaDescribedBy = 'case-postcode-hint';

    _updateViewModel();

    //public

    function enterCaseReferenceLinkClicked() {
      vm.caseReferenceFocused = true;
    }

    function enterCasePostcodeLinkClicked() {
      vm.casePostcodeFocused = true;
    }

    function continueButtonClicked(event) {
      event.preventDefault();
      
      updateFormProperties();
      
      updateReferenceAriaDescribedBy();
      updateReferenceAriaInvalid();

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
      vm.form.caseReference.$myinvalid = vm.form.caseReference.$invalid;
      vm.form.casePostcode.$myinvalid = vm.form.casePostcode.$invalid;
    }

    function updateErrorSummaryFocus() {
      vm.errorSummaryFocused = vm.form.$invalid;
    }

    function updateReferenceAriaDescribedBy() {
      vm.caseReferenceAriaDescribedBy = vm.form.caseReference.$myinvalid ? 'error-message-case-reference' : 'case-reference-hint';
    }

    function updateReferenceAriaInvalid() {
      vm.caseReferenceAriaInvalid = vm.form.$submitted && vm.form.caseReference.$myinvalid
    }

    function updatePostcodeAriaDescribedBy() {
      vm.casePostcodeAriaDescribedBy = vm.form.casePostcode.$myinvalid ? 'error-message-case-postcode' : 'case-postcode-hint';
    }

    function updatePostcodeAriaInvalid() {
      vm.casePostcodeAriaInvalid = vm.form.$submitted && vm.form.casePostcode.$myinvalid;
    }
    
    function _updateViewModel() {
      vm.caseReference = get('caseReference');
      vm.casePostcode = get('casePostcode');
    }

    function updateSessionStorage() {
      if (vm.form.$valid) {
        set('caseReference', vm.caseReference);
        set('casePostcode', vm.casePostcode);
      }
    }

    function updateState() {
      if (vm.form.$valid) {
        state.goNext(vm);
      }
    }

    function updateShowErrorSummary() {
      vm.showErrorSummary = vm.form.$submitted && vm.form.$myinvalid;
    }
  }

})();