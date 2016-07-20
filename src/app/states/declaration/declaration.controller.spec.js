(function() {
  'use strict';

  describe('DeclarationController', function() {
    var scope;
    var vm;
    var $state;
    var event;
    var structureService;
    var structureCallResolver;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function($rootScope, $q, _$controller_, _$state_) {
      scope = $rootScope.$new();
      structureService = {
        makePlea: function() {
          structureCallResolver = $q.defer();
          return structureCallResolver.promise;
        }
      }

      vm = _$controller_('DeclarationController', {
        structureService: structureService,
        transformPleaData: angular.noop,
        sessionStorage: {
          getGetter: function () {
            return function () {
              return {
                yourCase: {},
                yourDetails: {}
              };
            };
          }
        }
      });
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

      it('should go to the next state when the plea is submitted succesfully', function() {
        //when
        vm.buttonContinue(event);
        scope.$apply();
        structureCallResolver.resolve();
        scope.$apply();
        //then
        expect($state.current.name).toEqual('your-plea-has-been-submitted');
      });

      it('should remain in the current state when there was an error while submitting the plea', function() {
        //when
        vm.buttonContinue(event);
        scope.$apply();
        structureCallResolver.reject();
        scope.$apply();
        //then
        expect($state.current.name).toEqual('declaration');
      });
    });
  });
})();
