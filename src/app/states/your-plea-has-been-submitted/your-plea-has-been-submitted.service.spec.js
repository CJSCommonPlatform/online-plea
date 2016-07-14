(function() {
  'use strict';

  describe('service yourPleaHasBeenSubmitted', function() {
    var yourPleaHasBeenSubmitted;
    var sessionStorage;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_yourPleaHasBeenSubmitted_, _sessionStorage_) {
      yourPleaHasBeenSubmitted = _yourPleaHasBeenSubmitted_;
      sessionStorage = _sessionStorage_;
    }));

    it('should be registered', function() {
      expect(yourPleaHasBeenSubmitted).not.toEqual(null);
    });

    describe('updateVm function', function() {
      it('should exist', function() {
        expect(yourPleaHasBeenSubmitted.updateVm).not.toEqual(null);
      });

      it('should update vm with data from sessionStorage', function() {
        //given
        var set = sessionStorage.getSetter('pleaApp.');
        set('foo', 'bar');
        //when
        var vm = {};
        yourPleaHasBeenSubmitted.updateVm(vm);
        //then
        expect(vm.pleaApp.foo).toEqual('bar');
      });
    });
  });
})();