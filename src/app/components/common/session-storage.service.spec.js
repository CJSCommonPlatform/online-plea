(function() {
  'use strict';

  describe('service sessionStorage', function() {
    var sessionStorage;
    var $sessionStorage;

    var KEY_VALUE = 'key value';

    beforeEach(module('pleaApp'));
    beforeEach(inject(function(_sessionStorage_, _$sessionStorage_) {
      sessionStorage = _sessionStorage_;
      $sessionStorage = _$sessionStorage_;
    }));

    it('should be registered', function() {
      expect(sessionStorage).not.toEqual(null);
    });

    describe('set function', function() {
      it('should exist', function() {
        expect(sessionStorage.set).not.toEqual(null);
      });

      it('should set KEY_VALUE in session storage under given key name', function() {
        //given
        expect($sessionStorage.pleaApp).not.toBeDefined();
        //when
        var set = sessionStorage.getSetter('pleaApp.');
        set('keyName', KEY_VALUE);
        //then
        expect($sessionStorage.pleaApp.keyName).toEqual(KEY_VALUE);
      });
    });

    describe('get function', function() {
      it('should exist', function() {
        expect(sessionStorage.get).not.toEqual(null);
      });

      it('should get KEY_VALUE from session storage given the key name', function() {
        //given
        $sessionStorage.pleaApp = { keyName: KEY_VALUE };
        //when
        var get = sessionStorage.getGetter('pleaApp.');
        var keyValue = get('keyName');
        //then
        expect(keyValue).toEqual(KEY_VALUE);
      });
    });
  });
})();