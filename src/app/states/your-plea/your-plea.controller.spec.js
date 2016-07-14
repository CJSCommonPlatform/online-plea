(function() {
  'use strict';

  describe('YourPleaController', function() {
    var scope;
    var vm;
    var $state;
    var event;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_, _pleas_, _yesNoAnswer_) {
      scope = $rootScope.$new();
      vm = _$controller_('YourPleaController');
      vm.pleas = _pleas_;
      vm.yesNoAnswer = _yesNoAnswer_;
      vm.form = {}
      $state = _$state_;
      event = jasmine.createSpyObj('event', ['preventDefault']);
    }));

    it('should be registered', function() {
      expect(vm).not.toEqual(null);
    });

    describe('buttonContinue function', function() {
      beforeEach(function() {
        //given
        $state.go('your-plea');
        scope.$apply();
        expect($state.current.name).toEqual('your-plea');
      });

      it('should preventDefault on the event', function() {
        //when
        vm.plea = vm.pleas.NOT_GUILTY;
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('should go to the next state; pleas=NOT_GUILTY', function() {
        //when
        vm.plea = vm.pleas.NOT_GUILTY;
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('confirm-your-answers');
      });

      it('should go to the next state; pleas=GUILTY', function() {
        //when
        vm.plea = vm.pleas.GUILTY;
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-employment');
      });
    });
  });
})();