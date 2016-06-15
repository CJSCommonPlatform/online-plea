(function() {
  'use strict';

  describe('YourBenefitsController', function() {
    var scope;
    var vm;
    var $state;
    var event;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_, _yesNoAnswer_) {
      scope = $rootScope.$new();
      vm = _$controller_('YourBenefitsController');
      vm.form = {};
      vm.yesNoAnswer = _yesNoAnswer_;
      $state = _$state_;
      event = jasmine.createSpyObj('event', ['preventDefault']);
    }));

    it('should be registered', function() {
      expect(vm).not.toEqual(null);
    });

    describe('buttonContinue function', function() {
      beforeEach(function() {
        //given
        $state.go('your-benefits');
        scope.$apply();
        expect($state.current.name).toEqual('your-benefits');
      });

      it('should preventDefault on the event', function() {
        //when
        vm.financialProblems = vm.yesNoAnswer.YES;
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('should go to the next state; financialProblems=Yes', function() {
        //when
        vm.financialProblems = vm.yesNoAnswer.YES;
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-expenses.household');
      });

      it('should go to the next state; financialProblems=No', function() {
        //when
        vm.financialProblems = vm.yesNoAnswer.NO;
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('confirm-your-answers');
      });
    });
  });
})();