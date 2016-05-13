(function () {

  'use strict';

  angular.module('pleaApp')
    .controller('YourCaseController', YourCaseController);

  YourCaseController.$inject = ['$state'];

  function YourCaseController($state) {
    var vm = this;

    vm.enterReferenceLinkClicked = enterReferenceLinkClicked;
    vm.enterPostcodeLinkClicked = enterPostcodeLinkClicked;
    vm.continueButtonClicked = continueButtonClicked;
    vm.referenceAriaDescribedBy = 'reference-hint';
    vm.postcodeAriaDescribedBy = 'postcode-hint';

    ///

    function enterReferenceLinkClicked() {
      vm.referenceFocused = true;
    }

    function enterPostcodeLinkClicked() {
      vm.postcodeFocused = true;
    }

    function continueButtonClicked(event) {
      event.preventDefault();
      updateFormProperties();
      updateReferenceAriaDescribedBy();
      updatePostcodeAriaDescribedBy();
      updateErrorSummaryFocus();
      updateState();
    }

    function updateFormProperties() {
      vm.form.$submitted = true;
      vm.form.$myinvalid = vm.form.$invalid;
      vm.form.reference.$myinvalid = vm.form.reference.$invalid;
      vm.form.postcode.$myinvalid = vm.form.postcode.$invalid;
    }

    function updateErrorSummaryFocus() {
      vm.errorSummaryFocused = vm.form.$invalid;
    }

    function updateReferenceAriaDescribedBy() {
      vm.referenceAriaDescribedBy = vm.form.reference.$myinvalid ? 'error-message-reference' : 'reference-hint';
    };

    function updatePostcodeAriaDescribedBy() {
      vm.postcodeAriaDescribedBy = vm.form.postcode.$myinvalid ? 'error-message-postcode' : 'postcode-hint';
    }

    function updateState() {
      if (vm.form.$valid) {
        var nextState = $state.current.data.nextState;
        $state.go(nextState);
      }
    }
  }

})();