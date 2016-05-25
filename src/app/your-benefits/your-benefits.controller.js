(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourBenefitsController', YourBenefitsController);

  YourBenefitsController.$inject = ['yesNoAnswer', 'sessionStorage', 'state'];

  function YourBenefitsController(yesNoAnswer, sessionStorage, state) {
    var vm = this;

    var BASE_NAME = 'pleaApp.yourBenefits.';
    var get = sessionStorage.getGetter(BASE_NAME);
    var set = sessionStorage.getSetter(BASE_NAME);

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = continueButtonClicked;

    _updateViewModel();

    //public

    function continueButtonClicked() {
      event.preventDefault();
      _updateSessionStorage();
      state.goNext(vm);
    }

    //private

    function _updateViewModel() {

      vm.benefit = get('benefit');
      vm.benefitFrequency = get('benefitFrequency');

      if (vm.benefitFrequency === 'Weekly') {
        vm.weeklyBenefitPay = get('benefitAmount');
      } else if (vm.benefitFrequency === 'Fortnightly') {
        vm.fortnightlyBenefitPay = get('benefitAmount');
      } else if (vm.benefitFrequency === 'Monthly') {
        vm.monthlyBenefitPay = get('benefitAmount');
      }

      vm.financialProblems = get('financialProblems');
      vm.financialProblemsJustification = get('financialProblemsJustification');
    }

    function _updateSessionStorage() {

      set('', undefined);

      set('benefit', vm.benefit);
      set('benefitFrequency', vm.benefitFrequency);

      if (vm.benefitFrequency === 'Weekly') {
        set('benefitAmount', vm.weeklyBenefitPay);
      } else if (vm.benefitFrequency === 'Fortnightly') {
        set('benefitAmount', vm.fortnightlyBenefitPay);
      } else if (vm.benefitFrequency === 'Monthly') {
        set('benefitAmount', vm.monthlyBenefitPay);
      }

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
