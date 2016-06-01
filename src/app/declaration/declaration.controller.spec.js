(function() {
  'use strict';

  describe('DeclarationController', function() {
    var scope;
    var vm;
    var $state;
    var event;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_) {
      scope = $rootScope.$new();
      vm = _$controller_('DeclarationController');
      $state = _$state_;
      event = jasmine.createSpyObj('event', ['preventDefault']);
    }));

    it('should be registered', function() {
      expect(vm).not.toEqual(null);
    });

    describe('buttonContinue function', function() {
      beforeEach(function() {
        //given
        $state.go('declaration');
        scope.$apply();
        expect($state.current.name).toEqual('declaration');
      });

      it('should preventDefault on the event', function() {
        //when
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('should go to the next state', function() {
        //when
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-plea-has-been-submitted');
      });
    });
  });
})();