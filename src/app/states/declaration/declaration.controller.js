(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('DeclarationController', DeclarationController);

  DeclarationController.$inject = ['lodash', 'state', 'sessionStorage', 'transformPleaData', 'structureService'];

  function DeclarationController(_, state, sessionStorage, transformPleaData, structureService) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;

    function continueButtonClicked(event) {
      event.preventDefault();

      var pleaData = sessionStorage.getGetter('')('pleaApp');
      var transformedPleaData = transformPleaData(pleaData);

      structureService.makePlea(pleaData.yourCase.caseId, pleaData.yourCase.defendantId, transformedPleaData)
        .then(function () {
          state.goNext(vm);
        });
    }
  }

})();
