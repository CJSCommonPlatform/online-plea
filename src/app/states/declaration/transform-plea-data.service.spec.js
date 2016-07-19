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

    describe('should contain information about plea', function() {
      it('when plea is guilty, should plea information', function() {
        pleaData.yourPlea.plea = 'Guilty';
        pleaData.yourPlea.court = 'Yes';
        pleaData.yourPlea.offenceId = 'OFFENCE_ID';
        pleaData.yourPlea.mitigation = 'Testing mitigation';

        var result = transformPleaData(pleaData);
        expect(result.pleas[0].plea).toEqual('GUILTY');
        expect(result.pleas[0].court).toEqual(true);
//        expect(result.pleas[0].offenceId).toEqual('OFFENCE_ID');
        expect(result.pleas[0].mitigation).toEqual('Testing mitigation');
      });

      describe('when not guilty', function() {
        it('additinal information should be provided', function() {
          pleaData.yourPlea.plea = 'Not guilty';
          pleaData.yourPlea.offenceId = 'OFFENCE_ID';
          pleaData.yourPlea.notGuiltyBecause = 'Reason';

          var result = transformPleaData(pleaData);
          expect(result.pleas[0].plea).toEqual('NOT_GUILTY');
//        expect(result.pleas[0].offenceId).toEqual('OFFENCE_ID');
          expect(result.pleas[0].notGuiltyBecause).toEqual('Reason');
        });

        it('and the interpreter is not required', function() {
          pleaData.yourPlea.plea = 'Not guilty';
          pleaData.yourPlea.interpreter = 'No';

          var result = transformPleaData(pleaData);
          expect(result.pleas[0].interpreter.yes).toEqual(false);
          expect(result.pleas[0].interpreter.language).not.toBeDefined();
        });

        it('and the interpreter is required', function() {
          pleaData.yourPlea.plea = 'Not guilty';
          pleaData.yourPlea.interpreter = 'Yes';
          pleaData.yourPlea.interpreterLanguage = 'Polish';

          var result = transformPleaData(pleaData);
          expect(result.pleas[0].interpreter.yes).toEqual(true);
          expect(result.pleas[0].interpreter.language).toEqual('Polish');
        });

        it('and there is no disagreement with a prosecution witness', function() {
          pleaData.yourPlea.plea = 'Not guilty';
          pleaData.yourPlea.prosecutorWitnessDisagree = 'No';

          var result = transformPleaData(pleaData);
          expect(result.pleas[0].prosecutorWitness.disagree).toEqual(false);
          expect(result.pleas[0].prosecutorWitness.details).not.toBeDefined();
        });

        it('and there is  disagreement with a prosecution witness', function() {
          pleaData.yourPlea.plea = 'Not guilty';
          pleaData.yourPlea.prosecutorWitnessDisagree = 'Yes';
          pleaData.yourPlea.prosecutorWitnessDetails = 'Details';

          var result = transformPleaData(pleaData);
          expect(result.pleas[0].prosecutorWitness.disagree).toEqual(true);
          expect(result.pleas[0].prosecutorWitness.details).toEqual('Details');
        });
        it('and dependant does not want to call a witness', function() {
          pleaData.yourPlea.plea = 'Not guilty';
          pleaData.yourPlea.defenceWitnessCall = 'No';

          var result = transformPleaData(pleaData);
          expect(result.pleas[0].prosecutorWitness.disagree).toEqual(false);
          expect(result.pleas[0].prosecutorWitness.details).not.toBeDefined();
        });

        it('and dependant does want to call a witness', function() {
          pleaData.yourPlea.plea = 'Not guilty';
          pleaData.yourPlea.defenceWitnessCall = 'Yes';
          pleaData.yourPlea.defenceWitnessContactDetails = 'Contact to defense witness';

          var result = transformPleaData(pleaData);
          expect(result.pleas[0].defenceWitness.call).toEqual(true);
          expect(result.pleas[0].defenceWitness.contactDetails).toEqual('Contact to defense witness');
        });
      });
    });

    describe('should contain information about financialMeans', function() {
      describe('when defendant is employed', function() {
        
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