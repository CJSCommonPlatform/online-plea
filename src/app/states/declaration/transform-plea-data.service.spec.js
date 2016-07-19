(function() {
  'use strict';

  fdescribe('transformPleaData should prepare result', function() {
    var transformPleaData, pleaData = {};
    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_transformPleaData_) {
      transformPleaData = _transformPleaData_;

      pleaData.yourCase = {caseId: 'TEST CASE'};
      pleaData.yourDetails = {};
      pleaData.yourDetails.detailsCorrect = 'Yes';
      pleaData.yourDetails.contactNumber = '0712345678';
      pleaData.yourDetails.emailAddress = 'test@example.com';
      pleaData.yourDetails.dateOfBirthDay = 1;
      pleaData.yourDetails.dateOfBirthMonth = 1;
      pleaData.yourDetails.dateOfBirthYear = 1980;
      pleaData.yourDetails.defendantId = 'TEST DEFENDANT';
      pleaData.yourPlea = {};
      pleaData.yourPlea.plea = '';

    }));

    it('should contain caseId', function() {
      var result = transformPleaData(pleaData);
      expect(result.caseId).toEqual(pleaData.yourCase.caseId);
    });

    it('should contain defendantId', function() {
      var result = transformPleaData(pleaData);
      expect(result.defendantId).toEqual(pleaData.yourDetails.defendantId);
    });

    describe('should contain information if details correct', function() {
      it('when correct, should not contain any additional information', function() {
        var result = transformPleaData(pleaData);
        expect(result.personalDetails.detailsCorrected.yes).toEqual(true);
        expect(result.personalDetails.detailsCorrected.correctDetails).not.toBeDefined();
      });
      it('when incorrect, should contain correct information', function() {
        pleaData.yourDetails.detailsCorrect = 'No';
        pleaData.yourDetails.yourUpdateDetails = 'Updated details';
        var result = transformPleaData(pleaData);

        expect(result.personalDetails.detailsCorrected.yes).toEqual(false);
        expect(result.personalDetails.detailsCorrected.correctDetails).toEqual(pleaData.yourDetails.yourUpdateDetails);
      });
    });

    describe('should contain information about nini', function() {
      it('when nino not present, should not contain any additional information', function() {
        pleaData.yourDetails.nationalInsurance = 'No';

        var result = transformPleaData(pleaData);
        expect(result.personalDetails.nationalInsuranceNumber.yes).toEqual(false);
        expect(result.personalDetails.nationalInsuranceNumber.NI).not.toBeDefined();
      });
      it('when nini present, number should be specifed', function() {
        pleaData.yourDetails.nationalInsurance = 'Yes';
        pleaData.yourDetails.nationalInsuranceNumber = 'NINO';
        var result = transformPleaData(pleaData);

        expect(result.personalDetails.nationalInsuranceNumber.yes).toEqual(true);
        expect(result.personalDetails.nationalInsuranceNumber.NI).toEqual(pleaData.yourDetails.nationalInsuranceNumber);
      });
    });

    it('should have basic personal details information', function() {
        var result = transformPleaData(pleaData);
        expect(result.personalDetails.email).toEqual(pleaData.yourDetails.emailAddress);
        expect(result.personalDetails.contactNumber).toEqual(pleaData.yourDetails.contactNumber);
        expect(result.personalDetails.dateOfBirth).toEqual("1980-01-01");
      });


  });
})();