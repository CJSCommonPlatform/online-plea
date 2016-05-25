(function() {

  'use strict';

  describe('YourDetailsController', function(){
    var vm;
    var scope;
    var event;
    var $state;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_) {
      scope = $rootScope.$new();
      vm = _$controller_('YourDetailsController', { $scope: scope });
      $state = _$state_;
      event = jasmine.createSpyObj('event', ['preventDefault']);

      $state.go('your-details');
      scope.$apply();
    }));

    it('should preventDefault on the event when continue button was clicked', function() {
      //when
      vm.buttonContinue(event);
      //then
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should move to your-plea after continue button was clicked', function() {
      //given
      expect($state.current.name).toEqual('your-details');
      //when
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-plea');
    });

  });

})();