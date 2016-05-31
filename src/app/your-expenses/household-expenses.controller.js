(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HouseholdExpensesController', HouseholdExpensesController);
    
  HouseholdExpensesController.$inject = ['$state', '$sessionStorage', 'lodash'];
    
  function HouseholdExpensesController($state, $sessionStorage, lodash) {
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

      var get = _storeGet($sessionStorage, 'pleaApp.yourExpenses.household.');

      vm.accomodation = get('accomodation');
      vm.utilityBills = get('utilityBills');
      vm.insurance = get('insurance');
      vm.councilTax = get('councilTax');
      vm.contribute = get('contribute');
    }
    
    function _updateSessionStorage() {

      var set = _storeSet($sessionStorage, 'pleaApp.yourExpenses.household.');

      set('accomodation', vm.accomodation);
      set('utilityBills', vm.utilityBills);
      set('insurance', vm.insurance);
      set('councilTax', vm.councilTax);
      set('contribute', vm.contribute);
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