(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('transformPleaData', transformPleaData);


  transformPleaData.$inject = ['lodash'];


  function transformPleaData(_) {
    return function(pleaApp) {
      var result = {};

      result.personalDetails = extractPersonalDetails(pleaApp.yourDetails);

      var plea = extractPlea(pleaApp.yourPlea, pleaApp.yourCase.offence.id);
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


    function extractPlea(yourPlea, offenceId) {
      var result = {};

      result.offenceId = offenceId; // TODO

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
          defenceWitness.contactDetails = yourPlea.defenceWitnessContactDetails;

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
      var result = {
        status: pleaApp.yourEmployment.employmentStatus
      };

      switch (result.status) {
      case 'Employed':
      case 'Self employed':
        result.payment = extractPayment();
        result.financialProblems = extractFinancialProblems(pleaApp, 'yourEmployment');
        break;
      case 'Employed and also receiving benefits':
      case 'Self employed and also receiving benefit':
        result.payment = extractPayment();
        result.benefits = extractBenefits(pleaApp);
        break;
      case 'Receiving out of work benefits':
        result.benefits = extractBenefits(pleaApp);
        break;
      case 'Other':
        result.provideDetails = pleaApp.yourEmployment.provideDetails;
        result.sourceIncome = pleaApp.yourEmployment.sourceIncome;
        result.payment = extractPayment();
        result.financialProblems = extractFinancialProblems(pleaApp, 'yourEmployment');

        var pensionCredit = result.pensionCredit = {
          yes: pleaApp.yourEmployment.pensionCredit === 'Yes'
        }

        if (pensionCredit.yes) {
          pensionCredit.payment = {
            frequency: pleaApp.yourPensionCredit.pensionCreditFrequency,
            amount: pleaApp.yourPensionCredit.pensionCreditAmount
          };
        }

        break;
      }

      function extractPayment() {
        return {
          frequency: pleaApp.yourEmployment.paymentFrequency,
          amount: pleaApp.yourEmployment.paymentAmount
        };
      }

      return result;
    }


    function extractBenefits(pleaApp) {
      return {
        benefit: pleaApp.yourBenefits.benefit,
        payment: {
          frequency: pleaApp.yourBenefits.benefitFrequency,
          amount: pleaApp.yourBenefits.benefitAmount
        },
        financialProblems: extractFinancialProblems(pleaApp, 'yourBenefits')
      };
    }


    function extractFinancialProblems(pleaApp, financialProblemsKey) {
      var result = {};

      result.yes = pleaApp[financialProblemsKey].financialProblems === 'Yes';

      if (result.yes) {
        result.justification = pleaApp[financialProblemsKey].financialProblemsJustification;
        result.expenses = extractExpenses(pleaApp.yourExpenses);
      }

      return result;
    }


    function extractExpenses(yourExpenses) {
      var result = {};

      result.household = _.pick(yourExpenses.household, [
        'accommodation',
        'utilityBills',
        'insurance',
        'councilTax'
      ]);

      result.household.otherContributors = yourExpenses.household.contribute === 'Yes';

      result.other = _.pick(yourExpenses.other, [
        'travelExpenses',
        'telephone',
        'loanRepayments',
        'countyCourtOrders',
        'fines',
        'childMaintenance'
      ]);

      result.other.televisionSubscriptions = yourExpenses.other.televisionSubscription;

      var otherSignificantExpenses = result.other.otherSignificantExpenses = {
        yes: yourExpenses.other.otherSignificantExpenses === 'Yes'
      };

      if (otherSignificantExpenses.yes) {
        otherSignificantExpenses.details = yourExpenses.other.otherSignificantExpensesDetails;
        otherSignificantExpenses.amount = yourExpenses.other.otherSignificantExpensesTotal;
      }

      return result;
    }
  }
})();
