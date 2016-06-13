(function() {
  'use strict';

  describe('constant nationalInsuranceNumberRegex', function() {

    var nationalInsuranceNumberRegex;

    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_nationalInsuranceNumberRegex_) {
      nationalInsuranceNumberRegex = _nationalInsuranceNumberRegex_;
    }));

    it('should be registered', function() {
      expect(nationalInsuranceNumberRegex).toBeDefined();
    });

    it('should match', function() {
      var validExamples = [
        'VO 12 34 56 D',
        'VO 12 34 56',
        'vo 12 34 56 d',
        'VO123456D',
        'VO 1 2 3 4 5 6 D'
      ];
      angular.forEach(validExamples, function(validExample) {
        expect(new RegExp(nationalInsuranceNumberRegex).test(validExample)).toEqual(true);
      });
    });

    it('should not match', function() {
      var invalidExamples = [
        'VO 12 34 5 D',
        'VO 12 34 567 D',
        'V O 12 34 56 D',
        'V 12 34 56 D'
      ];
      angular.forEach(invalidExamples, function(invalidExample) {
        expect(new RegExp(nationalInsuranceNumberRegex).test(invalidExample)).toEqual(false);
      });
    });
  });
})();