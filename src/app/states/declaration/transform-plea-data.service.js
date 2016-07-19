(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('transformPleaData', transformPleaData);


  transformPleaData.$inject = ['lodash'];


  function transformPleaData(_) {
    return function(pleaApp) {
      var result = {};

      result.caseId = pleaApp.yourCase.caseId;
      result.defendantId = pleaApp.yourDetails.defendantId;
      result.personalDetails = extractPersonalDetails(pleaApp.yourDetails);

      var plea = extractPlea(pleaApp.yourPlea);
      result.pleas = [plea];

      if (plea.plea === 'GUILTY') {
        result.financialMeans = extractFinancialMeans(pleaApp);
      }

      return result;
    };


    function extractPersonalDetails(yourDetails) {
      var result = {};

      var detailsCorrected = result.detailsCorrected = {
        yes: yourDetails.detailsCorrect === 'Yes'
      };

      if (!detailsCorrected.yes) {
        detailsCorrected.correctDetails = yourDetails.yourUpdateDetails;
      }

      result.contactNumber = yourDetails.contactNumber;

      if (yourDetails.emailAddress) {
        result.email = yourDetails.emailAddress;
      }

      result.dateOfBirth = moment({
        day: yourDetails.dateOfBirthDay,
        month: yourDetails.dateOfBirthMonth - 1,
        year: yourDetails.dateOfBirthYear
      }).format('YYYY-MM-DD');

      var nationalInsuranceNumber = result.nationalInsuranceNumber = {
        yes: yourDetails.nationalInsurance === 'Yes'
      };

      if (nationalInsuranceNumber.yes) {
        nationalInsuranceNumber.NI = yourDetails.nationalInsuranceNumber;
      }

      return result;
    }


    function extractPlea(yourPlea) {
      var result = {};

      result.offenceId = '' // TODO

      if (yourPlea.plea === 'Guilty') {
        result.plea = 'GUILTY';

        result.court = yourPlea.court === 'Yes';

        if (yourPlea.mitigation) {
          result.mitigation = yourPlea.mitigation;
        }
      } else {
        result.plea = 'NOT_GUILTY';

        result.notGuiltyBecause = yourPlea.notGuiltyBecause;

        var interpreter = result.interpreter = {
          yes: yourPlea.interpreter === 'Yes'
        };

        if (interpreter.yes) {
          interpreter.language = yourPlea.interpreterLanguage;
        }

        var prosecutorWitness = result.prosecutorWitness = {
          disagree: yourPlea.prosecutorWitnessDisagree === 'Yes'
        };

        if (prosecutorWitness.disagree) {
          prosecutorWitness.details = yourPlea.prosecutorWitnessDetails;
        }

        var defenceWitness = result.defenceWitness = {
          call: yourPlea.defenceWitnessCall === 'Yes'
        };

        if (defenceWitness.call) {
          defenceWitness.contactDetails = defenceWitnessContactDetails;

          var defenceWitnessInterpreter = defenceWitness.interpreter = {
            yes: yourPlea.defenceWitnessInterpreter === 'Yes'
          };

          if (defenceWitnessInterpreter.yes) {
            defenceWitnessInterpreter.language = yourPlea.defenceWitnessInterpreterLanguage;
          }
        }
      }

      return result;
    }


    function extractFinancialMeans(pleaApp) {
      var result = {};

      // TODO: Implement

      return result;
    }
  }
})();
