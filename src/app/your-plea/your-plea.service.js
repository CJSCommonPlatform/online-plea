(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourPlea', yourPlea);

  yourPlea.$inject = ['sessionStorage', 'pleas', 'yesNoAnswer'];

  function yourPlea(sessionStorage, pleas, yesNoAnswer) {
    var BASE_NAME = 'pleaApp.yourPlea.';

    var service = {
      updateVm: updateVm,
      updateSessionStorage: updateSessionStorage
    };

    return service;

    function updateVm(vm) {
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

    function updateSessionStorage(vm) {

      var set = sessionStorage.getSetter(BASE_NAME);

      sessionStorage.reset(BASE_NAME);

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
