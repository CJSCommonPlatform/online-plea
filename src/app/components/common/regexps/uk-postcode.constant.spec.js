(function() {
  'use strict';

  describe('Constant: ukPostcodeRegex', function() {

    var ukPostcodeRegex;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_ukPostcodeRegex_) {
      ukPostcodeRegex = _ukPostcodeRegex_;
    }));

    it('Should be registered', function() {
      expect(ukPostcodeRegex).toBeDefined();
    });

    it('Should validate the postcodes', function() {
      var validExamples = [
        'CR02TW E61LY SE58DL'
      ];
      angular.forEach(validExamples, function(validExample) {
        expect(new RegExp(ukPostcodeRegex).test(validExample)).toEqual(true);
      });
    });

    it('Should not validate the postcodes', function() {
      var invalidExamples = [
        'CR0 123400 erqERE'
      ];
      angular.forEach(invalidExamples, function(invalidExample) {
        expect(new RegExp(ukPostcodeRegex).test(invalidExample)).toEqual(false);
      });
    });
  });
})();