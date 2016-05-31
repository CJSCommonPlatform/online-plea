(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherExpensesController', OtherExpensesController);
    
  OtherExpensesController.$inject = ['$state', '$sessionStorage', 'lodash'];
    
  function OtherExpensesController($state, $sessionStorage, lodash) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;

    _updateViewModel();

    //public

    function continueButtonClicked(event) {
      event.preventDefault();
      _updateSessionStorage();
      _updateState();
    }
    
    //private
    
    function _updateViewModel() {

      var get = _storeGet($sessionStorage, 'pleaApp.yourExpenses.other.');

      vm.televisionSubscription = get('televisionSubscription');
      vm.travelExpenses = get('travelExpenses');
      vm.telephone = get('telephone');
      vm.loanRepayments = get('loanRepayments');
      vm.countyCourtOrders = get('countyCourtOrders');
      vm.fines = get('fines');
      vm.childMaintenance = get('childMaintenance');
      vm.otherExpenses = get('otherExpenses');
      vm.otherExpensesDetails = get('otherExpensesDetails');
      vm.otherExpensesMonthly = get('otherExpensesMonthly');
    }
    
    function _updateSessionStorage() {

      var set = _storeSet($sessionStorage, 'pleaApp.yourExpenses.other.');

      set('', undefined);

      set('televisionSubscription', vm.televisionSubscription);
      set('travelExpenses', vm.travelExpenses);
      set('telephone', vm.telephone);
      set('loanRepayments', vm.loanRepayments);
      set('countyCourtOrders', vm.countyCourtOrders);
      set('fines', vm.fines);
      set('childMaintenance', vm.childMaintenance);
      set('otherExpenses', vm.otherExpenses);
      if (vm.otherExpenses === 'Yes') {
        set('otherExpensesDetails', vm.otherExpensesDetails);
        set('otherExpensesMonthly', vm.otherExpensesMonthly);
      }
    }
    
    function _storeSet($sessionStorage, baseName) {
      return function(propertyName, propertyValue) {
        lodash.set($sessionStorage, baseName + propertyName, propertyValue);
      }
    }
    
    function _storeGet($sessionStorage, baseName) {
      return function(propertyName) {
        return lodash.get($sessionStorage, baseName + propertyName);
      }
    }

    function _updateState() {
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    }
    
  }

})();