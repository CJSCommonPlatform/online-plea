(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourEmploymentFinancesController', YourEmploymentFinancesController);

  YourEmploymentFinancesController.$inject = ['yesNoAnswer', 'sessionStorage', 'state'];

  function YourEmploymentFinancesController(yesNoAnswer, sessionStorage, state) {
    var vm = this;

    var BASE_NAME = 'pleaApp.yourEmployment.';

    var get = sessionStorage.getGetter(BASE_NAME);
    var set = sessionStorage.getSetter(BASE_NAME);

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = continueButtonClicked;

    _updateViewModel();

    // public

    function continueButtonClicked() {
      event.preventDefault();
      _updateSessionStorage();
      state.goNext(vm);
    }

    // private

    function _updateViewModel() {

      vm.employmentStatus = get('employmentStatus');
      vm.provideDetails = get('provideDetails');
      vm.sourceIncome = get('sourceIncome');
      vm.paymentFrequency = get('paymentFrequency');

      if (vm.paymentFrequency === 'Weekly') {
        vm.weeklyPay = get('paymentAmount');
      } else if (vm.paymentFrequency === 'Fortnightly') {
        vm.fortnightlyPay = get('paymentAmount');
      } else if (vm.paymentFrequency === 'Monthly') {
        vm.monthlyPay = get('paymentAmount');
      } else if (vm.paymentFrequency === 'Other') {
        vm.otherPay = get('paymentAmount');
      }

      vm.pensionCredit = get('pensionCredit');
      vm.financialProblems = get('financialProblems');
      vm.financialProblemsJustification = get('financialProblemsJustification');

    }

    function _updateSessionStorage() {

      var employmentStatus = get('employmentStatus');

      set('', undefined);
      set('employmentStatus', employmentStatus);
      set('provideDetails', vm.provideDetails);
      set('sourceIncome', vm.sourceIncome);
      set('paymentFrequency', vm.paymentFrequency);

      if (vm.paymentFrequency === 'Weekly') {
        set('paymentAmount', vm.weeklyPay);
      } else if (vm.paymentFrequency === 'Fortnightly') {
        set('paymentAmount', vm.fortnightlyPay);
      } else if (vm.paymentFrequency === 'Monthly') {
        set('paymentAmount', vm.monthlyPay);
      } else if (vm.paymentFrequency === 'Other') {
        set('paymentAmount', vm.otherPay);
      }

      set('pensionCredit', vm.pensionCredit);
      set('financialProblems', vm.financialProblems);

      if (vm.financialProblems === 'Yes') {
        set('financialProblemsJustification', vm.financialProblemsJustification);
      } else {
        sessionStorage.reset('pleaApp.yourExpenses.');
        sessionStorage.reset('pleaApp.yourBenefits.');
      }

    }
  }
})();
