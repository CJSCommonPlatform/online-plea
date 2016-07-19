(function() {
  'use strict';

  describe('YourEmploymentFinancesController', function() {
    var scope;
    var vm;
    var $state;
    var event;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_, _yesNoAnswer_) {
      scope = $rootScope.$new();
      vm = _$controller_('YourEmploymentFinancesController');
      vm.form = {};
      vm.yesNoAnswer = _yesNoAnswer_;
      $state = _$state_;
      event = jasmine.createSpyObj('event', ['preventDefault']);
    }));

    it('should be registered', function() {
      expect(vm).not.toEqual(null);
    });

    describe('buttonContinue function; state=your-employment.employed.finances', function() {
      beforeEach(function() {
        //given
        $state.go('your-employment.employed.finances');
        scope.$apply();
        expect($state.current.name).toEqual('your-employment.employed.finances');
      });

      it('should preventDefault on the event', function() {
        //when
        vm.financialProblems = 'No';
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('should go to the next state; financialProblems=YES', function() {
        //when
        vm.financialProblems = 'Yes';
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-expenses.household');
      });

      it('should go to the next state; financialProblems=NO', function() {
        //when
        vm.financialProblems = 'No';
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('confirm-your-answers');
      });
    });

    describe('buttonContinue function; state=your-employment.employed-receiving-benefits', function() {
      beforeEach(function() {
        //given
        $state.go('your-employment.employed-receiving-benefits.finances');
        scope.$apply();
        expect($state.current.name).toEqual('your-employment.employed-receiving-benefits.finances');
      });

      it('should go to the next state', function() {
        //when
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-benefits');
      });
    });

    xdescribe('buttonContinue function; state=your-employment.other.finances', function() {
      beforeEach(function() {
        //given
        $state.go('your-employment.other.finances');
        scope.$apply();
        expect($state.current.name).toEqual('your-employment.other.finances');
      });

      it('should go to the next state; pensionCredit=Yes', function() {
        //when
        vm.pensionCredit = 'Yes';
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-pension-credit');
      });

      it('should go to the next state; pensionCredit=No', function() {
        //when
        vm.pensionCredit = 'No';
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-employment.other.finances.expenses');
      });
    });

    describe('buttonContinue function; state=your-employment.self-employed.finances', function() {
      beforeEach(function() {
        //given
        $state.go('your-employment.self-employed.finances');
        scope.$apply();
        expect($state.current.name).toEqual('your-employment.self-employed.finances');
      });

      it('should go to the next state; financialProblems=Yes', function() {
        //when
        vm.financialProblems = 'Yes';
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-expenses.household');
      });

      it('should go to the next state; financialProblems=No', function() {
        //when
        vm.financialProblems = 'No';
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('confirm-your-answers');
      });
    });

    describe('buttonContinue function; state=your-employment.self-employed-receiving-benefits.finances', function() {
      beforeEach(function() {
        //given
        $state.go('your-employment.self-employed-receiving-benefits.finances');
        scope.$apply();
        expect($state.current.name).toEqual('your-employment.self-employed-receiving-benefits.finances');
      });

      it('should go to the next state', function() {
        //when
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-benefits');
      });
    });
  });
})();