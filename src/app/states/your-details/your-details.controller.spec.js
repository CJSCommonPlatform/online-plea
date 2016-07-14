(function() {

  'use strict';

  describe('YourDetailsController', function(){
    var vm;
    var scope;
    var event;
    var $controller;
    var $state;

    beforeEach(module('pleaApp'));

    describe('buttonContinue', function() {

      beforeEach(inject(function($rootScope, _$controller_, _$state_) {
        scope = $rootScope.$new();
        $controller = _$controller_;
        vm = _$controller_('YourDetailsController', { $scope: scope });
        $state = _$state_;
        event = jasmine.createSpyObj('event', ['preventDefault']);

        vm.form = {};
      }));

      it('should preventDefault on the event when continue button was clicked', function() {
        //given
        $state.go('your-details');
        scope.$apply();
        //when
        vm.buttonContinue(event);
        //then
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('should move to the next state; nextState param provided', function() {
        //given
        $state.go('your-details', {nextState: 'confirm-your-answers'});
        scope.$apply();
        expect($state.current.name).toEqual('your-details');
        //when
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('confirm-your-answers');
      });

      it('should move to the next state; nextState param not provided', function() {
        //given
        $state.go('your-details');
        scope.$apply();
        expect($state.current.name).toEqual('your-details');
        //when
        vm.buttonContinue(event);
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-plea');
      });

    });

  });

})();