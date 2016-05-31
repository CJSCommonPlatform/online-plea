(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ExpensesController', ExpensesController);
  
  ExpensesController.$inject = ['$controller', '$state', '$sessionStorage', 'yesNoAnswer', 'lodash'];

  function ExpensesController($controller, $state, $sessionStorage, yesNoAnswer, lodash) {
    var vm = this;

    angular.extend(vm, $controller('FlowController'));

    vm.yesNoAnswer = yesNoAnswer;

    _updateViewModel(vm, $sessionStorage);
    _updateState(vm, $state);
  }  

  //private
  
  function _updateViewModel(vm, $sessionStorage) {
    var get = _storeGet($sessionStorage, 'pleaApp.yourEmployment.');
    vm.financialProblems = get('financialProblems');
  }

  function _storeGet($sessionStorage, baseName) {
    return function(propertyName) {
      return lodash.get($sessionStorage, baseName + propertyName);
    }
  }

  function _updateState(vm, $state) {
    var nextState = vm.getNextState(vm, $state);
    $state.go(nextState);
  }
})();