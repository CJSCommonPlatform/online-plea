(function() {
  'use strict';

  fdescribe('HouseholdExpensesController', function() {
    var scope;
    var vm;
    var $state;
    var event;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_) {
      scope = $rootScope.$new();
      vm = _$controller_('HouseholdExpensesController');
      $state = _$state_;
      event = jasmine.createSpyObj('event', ['preventDefault']);
    }));

    it('should be registered', function() {
      expect(vm).not.toEqual(null);
    });

    describe('buttonContinue function', function() {
      beforeEach(function() {
        //given
        $state.go('your-expenses.household');
        scope.$apply();
        expect($state.current.name).toEqual('your-expenses.household');
        //when
        vm.buttonContinue(event);
        scope.$apply();
      });

      it('should preventDefault on the event', function() {
        //then
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('should go to next state', function() {
        //then
        expect($state.current.name).toEqual('your-expenses.other');
      });
    });
  });
})();