(function() {
  'use strict';

  fdescribe('constant decimalLimit', function() {
    var decimalLimit;

    beforeEach(module('pleaApp'));
    beforeEach(inject(function(_decimalLimit_) {
      decimalLimit = _decimalLimit_;
    }));

    it('should be registered', function() {
      expect(decimalLimit).not.toEqual(null);
    });

		it('should exist', function() {
			console.log(new RegExp('\'' + decimalLimit + '\''));
			expect('12345'.match(new RegExp(decimalLimit.toString()))).toEqual(true);
		});

  });
})();