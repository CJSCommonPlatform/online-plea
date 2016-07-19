(function() {
  'use strict';

  xdescribe('ExpensesController', function() {
    var scope;
    var $controller;
    var $state;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_, _sessionStorage_) {
      scope = $rootScope.$new();
      $controller = _$controller_;
      $state = _$state_;
      sessionStorage = _sessionStorage_;

      $state.go('your-employment.other.finances.expenses');
      scope.$apply();
      expect($state.current.name).toEqual('your-employment.other.finances.expenses');
    }));

    it('should go to the next state; financialProblems=NO', function() {
      //given
      var set = sessionStorage.getSetter('pleaApp.yourEmployment.');
      set('financialProblems', 'No');
      //when
      $controller('ExpensesController');
      scope.$apply();
      //then
      expect($state.current.name).toEqual('confirm-your-answers');
    });

    it('should go to the next state; financialProblems=NO', function() {
      //given
      var set = sessionStorage.getSetter('pleaApp.yourEmployment.');
      set('financialProblems', 'Yes');
      //when
      $controller('ExpensesController');
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-expenses.household');
    });
  });
})();