(function() {
  'use strict';

  describe('constant ukTelephoneNumberRegex', function() {

    var ukTelephoneNumberRegex;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_ukTelephoneNumberRegex_) {
      ukTelephoneNumberRegex = _ukTelephoneNumberRegex_;
    }));

    it('should be registered', function() {
      expect(ukTelephoneNumberRegex).not.toEqual(null);
    });

    if('should match', function() {
      expect('070 1234 1234'.match(new RegExp(ukTelephoneNumberRegex))).toEqual(true);
      expect('0707 1234 1234'.match(new RegExp(ukTelephoneNumberRegex))).toEqual(false);
    });
  });
})();