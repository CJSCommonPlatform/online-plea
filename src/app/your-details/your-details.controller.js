(function() {

  'use strict';  

  angular.module('pleaApp')
    .controller('YourDetailsController', YourDetailsController);

  YourDetailsController.$inject = ['yourDetails', 'state', '$stateParams', 'formValidation', 'nationalInsuranceNumberRegex', 'emailAddressRegex', 'ukTelephoneNumberRegex'];

  function YourDetailsController(yourDetails, state, $stateParams, formValidation, nationalInsuranceNumberRegex, emailAddressRegex, ukTelephoneNumberRegex) {
    var vm = this;

    vm.validateNationalInsuranceNumber = function (value) {
      return vm.nationalInsurance !== 'Yes' || (new RegExp(nationalInsuranceNumberRegex)).test(value);
    };

    vm.emailAddressRegex = emailAddressRegex;
    vm.ukTelephoneNumberRegex = ukTelephoneNumberRegex;
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;
    vm.getNextState = getNextState;

    yourDetails.updateVm(vm);

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      yourDetails.updateSessionStorage(vm);
      if (!vm.form.invalid) {
        state.go(getNextState());
      }
    }

    function getNextState() {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }
  }
})();