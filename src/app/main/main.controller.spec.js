(function() {

  'use strict';

  describe('MainController', function(){
    var vm;
    var scope;
    var $state;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, _$controller_, _$state_) {
      scope = $rootScope.$new();
      vm = _$controller_('MainController', { $scope: scope });
      $state = _$state_;
      scope.$apply();
    }));

    it('should move to your-case after continue button was clicked', function() {
      //given
      expect($state.current.name).toEqual('index');
      //when
      vm.buttonContinue(event);
      scope.$apply();
      //then
      expect($state.current.name).toEqual('your-case');
    });

  });

})();