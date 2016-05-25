(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourPleaController', YourPleaController);

  YourPleaController.$inject = ['pleas', 'yesNoAnswer', 'sessionStorage', 'state'];

  function YourPleaController(pleas, yesNoAnswer, sessionStorage, state) {
    var vm = this;

    var BASE_NAME = 'pleaApp.yourPlea.';

    vm.pleas = pleas;
    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = buttonContinueClicked;

    _updateViewModel();

    //public

    function buttonContinueClicked(event) {
      event.preventDefault();
      _updateSessionStorage();
      state.goNext(vm);
    }

    //private

    function _updateViewModel() {

      var get = sessionStorage.getGetter(BASE_NAME);

      vm.plea = get('plea');
      vm.court = get('court');
      vm.mitigation = get('mitigation');
      vm.notGuiltyBecause = get('notGuiltyBecause');
      vm.interpreter = get('interpreter');
      vm.interpreterLanguage = get('interpreterLanguage');
      vm.prosecutorWitnessDisagree = get('prosecutorWitnessDisagree');
      vm.prosecutorWitnessDetails = get('prosecutorWitnessDetails');
      vm.defenceWitnessCall = get('defenceWitnessCall');
      vm.defenceWitnessContactDetails = get('defenceWitnessContactDetails');
      vm.defenceWitnessInterpreter = get('defenceWitnessInterpreter');
      vm.defenceWitnessInterpreterLanguage = get('defenceWitnessInterpreterLanguage');
    }

    function _updateSessionStorage() {

      sessionStorage.reset(BASE_NAME);

      var set = sessionStorage.getSetter(BASE_NAME);

      set('plea', vm.plea);

      if (vm.plea === pleas.GUILTY) {

        set('court', vm.court);
        set('mitigation', vm.mitigation);

      } else if (vm.plea === pleas.NOT_GUILTY) {

        sessionStorage.reset('pleaApp.yourEmployment.');
        sessionStorage.reset('pleaApp.yourExpenses.');
        sessionStorage.reset('pleaApp.yourBenefits.');

        set('notGuiltyBecause', vm.notGuiltyBecause);

        set('interpreter', vm.interpreter);
        if (vm.interpreter === yesNoAnswer.YES) {
          set('interpreterLanguage', vm.interpreterLanguage);
        }

        set('prosecutorWitnessDisagree', vm.prosecutorWitnessDisagree);
        if (vm.prosecutorWitnessDisagree === yesNoAnswer.YES) {
          set('prosecutorWitnessDetails', vm.prosecutorWitnessDetails);
        }

        set('defenceWitnessCall', vm.defenceWitnessCall);
        if (vm.defenceWitnessCall === yesNoAnswer.YES) {
          set('defenceWitnessContactDetails', vm.defenceWitnessContactDetails);

          set('defenceWitnessInterpreter', vm.defenceWitnessInterpreter);
          if (vm.defenceWitnessInterpreter === yesNoAnswer.YES) {
            set('defenceWitnessInterpreterLanguage', vm.defenceWitnessInterpreterLanguage);
          }
        }
      }
    }
  }
})();
