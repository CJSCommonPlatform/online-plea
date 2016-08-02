(function() {
  'use strict';

  describe('transformPleaData should prepare result', function() {
    var transformPleaData, pleaData = {};
    beforeEach(module('pleaApp'));

    beforeEach(inject(function(_transformPleaData_) {
      transformPleaData = _transformPleaData_;

      pleaData = {};
      pleaData.yourCase = {
        caseId: 'TEST CASE',
        offence: {id: 'test'}
      };
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
      pleaData.yourEmployment = {};

    }));

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
        describe('and has not financial problems', function() {
          it ('should have Weekly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Weekly';
            pleaData.yourEmployment.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Employed');
            expect(result.financialMeans.payment.frequency).toEqual('Weekly');
            expect(result.financialMeans.payment.amount).toEqual('100');
          });
          it ('should have Monthly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Monthly';
            pleaData.yourEmployment.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Employed');
            expect(result.financialMeans.payment.frequency).toEqual('Monthly');
            expect(result.financialMeans.payment.amount).toEqual('100');
          });
          it ('should have Fortnightly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Fortnightly';
            pleaData.yourEmployment.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Employed');
            expect(result.financialMeans.payment.frequency).toEqual('Fortnightly');
            expect(result.financialMeans.payment.amount).toEqual('100');
          });
        });

        describe('and has financial problems', function() {
          it ('and no other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed';
            pleaData.yourEmployment.financialProblems = 'Yes';
            pleaData.yourEmployment.financialProblemsJustification = 'I will become homeless';

            pleaData.yourExpenses = {};
            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.accommodation = '1000';
            pleaData.yourExpenses.household.utilityBills = '200';
            pleaData.yourExpenses.household.insurance = '30';
            pleaData.yourExpenses.household.councilTax = '120';
            pleaData.yourExpenses.household.contribute = 'No';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.televisionSubscription = '30';
            pleaData.yourExpenses.other.travelExpenses = '60';
            pleaData.yourExpenses.other.telephone = '50';
            pleaData.yourExpenses.other.loanRepayments = '150';
            pleaData.yourExpenses.other.countyCourtOrders = '5';
            pleaData.yourExpenses.other.fines = '0';
            pleaData.yourExpenses.other.childMaintenance = '80';
            pleaData.yourExpenses.other.otherSignificantExpenses = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.financialProblems.justification).toEqual('I will become homeless');
            expect(result.financialMeans.financialProblems.expenses.household.accommodation).toEqual('1000');
            expect(result.financialMeans.financialProblems.expenses.household.utilityBills).toEqual('200');
            expect(result.financialMeans.financialProblems.expenses.household.insurance).toEqual('30');
            expect(result.financialMeans.financialProblems.expenses.household.councilTax).toEqual('120');
            expect(result.financialMeans.financialProblems.expenses.household.otherContributors).toEqual(false);
            expect(result.financialMeans.financialProblems.expenses.other.televisionSubscriptions).toEqual('30');
            expect(result.financialMeans.financialProblems.expenses.other.travelExpenses).toEqual('60');
            expect(result.financialMeans.financialProblems.expenses.other.telephone).toEqual('50');
            expect(result.financialMeans.financialProblems.expenses.other.loanRepayments).toEqual('150');
            expect(result.financialMeans.financialProblems.expenses.other.countyCourtOrders).toEqual('5');
            expect(result.financialMeans.financialProblems.expenses.other.fines).toEqual('0');
            expect(result.financialMeans.financialProblems.expenses.other.childMaintenance).toEqual('80');
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(false);
          });
          it ('and other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed';
            pleaData.yourEmployment.financialProblems = 'Yes';

            pleaData.yourExpenses = {};
            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.contribute = 'Yes';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.otherSignificantExpenses = 'Yes';
            pleaData.yourExpenses.other.otherSignificantExpensesDetails = 'Other significant expenses';
            pleaData.yourExpenses.other.otherSignificantExpensesTotal = '95';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.financialProblems.expenses.household.otherContributors).toEqual(true);
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(true);
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.details).toEqual('Other significant expenses');
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.amount).toEqual('95');
          });
        });

      });

      describe('when defendant is employed and is also receiving benefits', function() {
        describe('and has not financial problems', function() {
          it ('should have Weekly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed and also receiving benefits';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Weekly';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.benefit = 'Contributory Employment and Support Allowance';
            pleaData.yourBenefits.benefitFrequency = 'Monthly';
            pleaData.yourBenefits.benefitAmount = '50';

            pleaData.yourBenefits.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Employed and also receiving benefits');
            expect(result.financialMeans.payment.frequency).toEqual('Weekly');
            expect(result.financialMeans.payment.amount).toEqual('100');
            expect(result.financialMeans.benefits.benefit).toEqual('Contributory Employment and Support Allowance');
            expect(result.financialMeans.benefits.payment.frequency).toEqual('Monthly');
            expect(result.financialMeans.benefits.payment.amount).toEqual('50');
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(false);

          });

          it ('should have Monthly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed and also receiving benefits';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Monthly';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.benefit = 'Income-related Employment and Support Allowance';
            pleaData.yourBenefits.benefitFrequency = 'Weekly';
            pleaData.yourBenefits.benefitAmount = '20';

            pleaData.yourBenefits.financialProblems = 'No';

            var result = transformPleaData(pleaData);

            expect(result.financialMeans.status).toEqual('Employed and also receiving benefits');
            expect(result.financialMeans.payment.frequency).toEqual('Monthly');
            expect(result.financialMeans.payment.amount).toEqual('100');
            expect(result.financialMeans.benefits.benefit).toEqual('Income-related Employment and Support Allowance');
            expect(result.financialMeans.benefits.payment.frequency).toEqual('Weekly');
            expect(result.financialMeans.benefits.payment.amount).toEqual('20');
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(false);
          });

          it ('should have Fortnightly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed and also receiving benefits';
            pleaData.yourEmployment.paymentAmount = '200';
            pleaData.yourEmployment.paymentFrequency = 'Fortnightly';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.benefit = 'Income Support';
            pleaData.yourBenefits.benefitFrequency = 'Fortnightly';
            pleaData.yourBenefits.benefitAmount = '100';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Employed and also receiving benefits');
            expect(result.financialMeans.payment.frequency).toEqual('Fortnightly');
            expect(result.financialMeans.payment.amount).toEqual('200');
            expect(result.financialMeans.benefits.benefit).toEqual('Income Support');
            expect(result.financialMeans.benefits.payment.frequency).toEqual('Fortnightly');
            expect(result.financialMeans.benefits.payment.amount).toEqual('100');
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(false);
          });
        });

        describe('and has  financial problems', function() {
          it ('and no other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed and also receiving benefits';

            pleaData.yourExpenses = {};

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.financialProblems = 'Yes';
            pleaData.yourBenefits.financialProblemsJustification = 'I will lose my house';

            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.accommodation = '1000';
            pleaData.yourExpenses.household.utilityBills = '200';
            pleaData.yourExpenses.household.insurance = '30';
            pleaData.yourExpenses.household.councilTax = '120';
            pleaData.yourExpenses.household.contribute = 'No';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.televisionSubscription = '30';
            pleaData.yourExpenses.other.travelExpenses = '60';
            pleaData.yourExpenses.other.telephone = '50';
            pleaData.yourExpenses.other.loanRepayments = '150';
            pleaData.yourExpenses.other.countyCourtOrders = '5';
            pleaData.yourExpenses.other.fines = '0';
            pleaData.yourExpenses.other.childMaintenance = '80';
            pleaData.yourExpenses.other.otherSignificantExpenses = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.justification).toEqual('I will lose my house');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.accommodation).toEqual('1000');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.utilityBills).toEqual('200');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.insurance).toEqual('30');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.councilTax).toEqual('120');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.otherContributors).toEqual(false);
            expect(result.financialMeans.benefits.financialProblems.expenses.other.televisionSubscriptions).toEqual('30');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.travelExpenses).toEqual('60');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.telephone).toEqual('50');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.loanRepayments).toEqual('150');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.countyCourtOrders).toEqual('5');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.fines).toEqual('0');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.childMaintenance).toEqual('80');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(false);
          });
          it ('and other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Employed and also receiving benefits';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.financialProblems = 'Yes';

            pleaData.yourExpenses = {};
            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.contribute = 'Yes';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.otherSignificantExpenses = 'Yes';
            pleaData.yourExpenses.other.otherSignificantExpensesDetails = 'Big expenses';
            pleaData.yourExpenses.other.otherSignificantExpensesTotal = '95';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.expenses.household.otherContributors).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.details).toEqual('Big expenses');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.amount).toEqual('95');
          });

        });
      });

      describe('when defendant is self employed', function() {
        describe('and has not financial problems', function() {
          it ('should have Weekly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Weekly';
            pleaData.yourEmployment.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Self employed');
            expect(result.financialMeans.payment.frequency).toEqual('Weekly');
            expect(result.financialMeans.payment.amount).toEqual('100');
          });
          it ('should have Monthly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Monthly';
            pleaData.yourEmployment.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Self employed');
            expect(result.financialMeans.payment.frequency).toEqual('Monthly');
            expect(result.financialMeans.payment.amount).toEqual('100');
          });
          it ('should have Fortnightly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Fortnightly';
            pleaData.yourEmployment.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Self employed');
            expect(result.financialMeans.payment.frequency).toEqual('Fortnightly');
            expect(result.financialMeans.payment.amount).toEqual('100');
          });
          it ('should have Other payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed';
            pleaData.yourEmployment.paymentAmount = '200';
            pleaData.yourEmployment.paymentFrequency = 'Other';
            pleaData.yourEmployment.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Self employed');
            expect(result.financialMeans.payment.frequency).toEqual('Other');
            expect(result.financialMeans.payment.amount).toEqual('200');
          });
        });

        describe('and has financial problems', function() {
          it ('and no other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed';
            pleaData.yourEmployment.financialProblems = 'Yes';
            pleaData.yourEmployment.financialProblemsJustification = 'I will become homeless';

            pleaData.yourExpenses = {};
            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.accommodation = '1000';
            pleaData.yourExpenses.household.utilityBills = '200';
            pleaData.yourExpenses.household.insurance = '30';
            pleaData.yourExpenses.household.councilTax = '120';
            pleaData.yourExpenses.household.contribute = 'No';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.televisionSubscription = '30';
            pleaData.yourExpenses.other.travelExpenses = '60';
            pleaData.yourExpenses.other.telephone = '50';
            pleaData.yourExpenses.other.loanRepayments = '150';
            pleaData.yourExpenses.other.countyCourtOrders = '5';
            pleaData.yourExpenses.other.fines = '0';
            pleaData.yourExpenses.other.childMaintenance = '80';
            pleaData.yourExpenses.other.otherSignificantExpenses = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.financialProblems.justification).toEqual('I will become homeless');
            expect(result.financialMeans.financialProblems.expenses.household.accommodation).toEqual('1000');
            expect(result.financialMeans.financialProblems.expenses.household.utilityBills).toEqual('200');
            expect(result.financialMeans.financialProblems.expenses.household.insurance).toEqual('30');
            expect(result.financialMeans.financialProblems.expenses.household.councilTax).toEqual('120');
            expect(result.financialMeans.financialProblems.expenses.household.otherContributors).toEqual(false);
            expect(result.financialMeans.financialProblems.expenses.other.televisionSubscriptions).toEqual('30');
            expect(result.financialMeans.financialProblems.expenses.other.travelExpenses).toEqual('60');
            expect(result.financialMeans.financialProblems.expenses.other.telephone).toEqual('50');
            expect(result.financialMeans.financialProblems.expenses.other.loanRepayments).toEqual('150');
            expect(result.financialMeans.financialProblems.expenses.other.countyCourtOrders).toEqual('5');
            expect(result.financialMeans.financialProblems.expenses.other.fines).toEqual('0');
            expect(result.financialMeans.financialProblems.expenses.other.childMaintenance).toEqual('80');
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(false);
          });
          it ('and other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed';
            pleaData.yourEmployment.financialProblems = 'Yes';

            pleaData.yourExpenses = {};
            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.contribute = 'Yes';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.otherSignificantExpenses = 'Yes';
            pleaData.yourExpenses.other.otherSignificantExpensesDetails = 'Other significant expenses';
            pleaData.yourExpenses.other.otherSignificantExpensesTotal = '95';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.financialProblems.expenses.household.otherContributors).toEqual(true);
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(true);
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.details).toEqual('Other significant expenses');
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.amount).toEqual('95');
          });
        });
      });

      describe('when defendant is self employed and is also receiving benefits', function() {
        describe('and has not financial problems', function() {
          it ('should have Weekly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed and also receiving benefit';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Weekly';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.benefit = 'Universal Credit';
            pleaData.yourBenefits.benefitFrequency = 'Monthly';
            pleaData.yourBenefits.benefitAmount = '50';

            pleaData.yourBenefits.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Self employed and also receiving benefit');
            expect(result.financialMeans.payment.frequency).toEqual('Weekly');
            expect(result.financialMeans.payment.amount).toEqual('100');
            expect(result.financialMeans.benefits.benefit).toEqual('Universal Credit');
            expect(result.financialMeans.benefits.payment.frequency).toEqual('Monthly');
            expect(result.financialMeans.benefits.payment.amount).toEqual('50');
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(false);

          });

          it ('should have Monthly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed and also receiving benefit';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Monthly';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.benefit = 'Other';
            pleaData.yourBenefits.benefitFrequency = 'Weekly';
            pleaData.yourBenefits.benefitAmount = '20';

            pleaData.yourBenefits.financialProblems = 'No';

            var result = transformPleaData(pleaData);

            expect(result.financialMeans.status).toEqual('Self employed and also receiving benefit');
            expect(result.financialMeans.payment.frequency).toEqual('Monthly');
            expect(result.financialMeans.payment.amount).toEqual('100');
            expect(result.financialMeans.benefits.benefit).toEqual('Other');
            expect(result.financialMeans.benefits.payment.frequency).toEqual('Weekly');
            expect(result.financialMeans.benefits.payment.amount).toEqual('20');
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(false);
          });

          it ('should have Fortnightly payments properly stored', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed and also receiving benefit';
            pleaData.yourEmployment.paymentAmount = '200';
            pleaData.yourEmployment.paymentFrequency = 'Fortnightly';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.benefit = 'Income Support';
            pleaData.yourBenefits.benefitFrequency = 'Fortnightly';
            pleaData.yourBenefits.benefitAmount = '100';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Self employed and also receiving benefit');
            expect(result.financialMeans.payment.frequency).toEqual('Fortnightly');
            expect(result.financialMeans.payment.amount).toEqual('200');
            expect(result.financialMeans.benefits.benefit).toEqual('Income Support');
            expect(result.financialMeans.benefits.payment.frequency).toEqual('Fortnightly');
            expect(result.financialMeans.benefits.payment.amount).toEqual('100');
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(false);
          });
        });

        describe('and has  financial problems', function() {
          it ('and no other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed and also receiving benefit';

            pleaData.yourExpenses = {};

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.financialProblems = 'Yes';
            pleaData.yourBenefits.financialProblemsJustification = 'I will lose my house';

            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.accommodation = '1000';
            pleaData.yourExpenses.household.utilityBills = '200';
            pleaData.yourExpenses.household.insurance = '30';
            pleaData.yourExpenses.household.councilTax = '120';
            pleaData.yourExpenses.household.contribute = 'No';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.televisionSubscription = '30';
            pleaData.yourExpenses.other.travelExpenses = '60';
            pleaData.yourExpenses.other.telephone = '50';
            pleaData.yourExpenses.other.loanRepayments = '150';
            pleaData.yourExpenses.other.countyCourtOrders = '5';
            pleaData.yourExpenses.other.fines = '0';
            pleaData.yourExpenses.other.childMaintenance = '80';
            pleaData.yourExpenses.other.otherSignificantExpenses = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.justification).toEqual('I will lose my house');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.accommodation).toEqual('1000');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.utilityBills).toEqual('200');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.insurance).toEqual('30');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.councilTax).toEqual('120');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.otherContributors).toEqual(false);
            expect(result.financialMeans.benefits.financialProblems.expenses.other.televisionSubscriptions).toEqual('30');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.travelExpenses).toEqual('60');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.telephone).toEqual('50');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.loanRepayments).toEqual('150');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.countyCourtOrders).toEqual('5');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.fines).toEqual('0');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.childMaintenance).toEqual('80');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(false);
          });
          it ('and other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Self employed and also receiving benefit';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.financialProblems = 'Yes';

            pleaData.yourExpenses = {};
            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.contribute = 'Yes';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.otherSignificantExpenses = 'Yes';
            pleaData.yourExpenses.other.otherSignificantExpensesDetails = 'Big expenses';
            pleaData.yourExpenses.other.otherSignificantExpensesTotal = '95';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.expenses.household.otherContributors).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.details).toEqual('Big expenses');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.amount).toEqual('95');
          });

        });
      });

      describe('when defendant is receiving benefits', function() {
        describe('and has not financial problems', function() {
          it('should have no payments stored and monthly benefits properly processed', function () {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Receiving out of work benefits';
            pleaData.yourEmployment.paymentAmount = '100';
            pleaData.yourEmployment.paymentFrequency = 'Weekly';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.benefit = 'Universal Credit';
            pleaData.yourBenefits.benefitFrequency = 'Monthly';
            pleaData.yourBenefits.benefitAmount = '50';

            pleaData.yourBenefits.financialProblems = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.status).toEqual('Receiving out of work benefits');
            expect(result.financialMeans.payment).not.toBeDefined();
            expect(result.financialMeans.benefits.benefit).toEqual('Universal Credit');
            expect(result.financialMeans.benefits.payment.frequency).toEqual('Monthly');
            expect(result.financialMeans.benefits.payment.amount).toEqual('50');
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(false);
          });
        });
        describe('and has financial problems', function() {
          it ('and no other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Receiving out of work benefits';

            pleaData.yourExpenses = {};

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.financialProblems = 'Yes';
            pleaData.yourBenefits.financialProblemsJustification = 'I will lose my house';

            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.accommodation = '1000';
            pleaData.yourExpenses.household.utilityBills = '200';
            pleaData.yourExpenses.household.insurance = '30';
            pleaData.yourExpenses.household.councilTax = '120';
            pleaData.yourExpenses.household.contribute = 'No';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.televisionSubscription = '30';
            pleaData.yourExpenses.other.travelExpenses = '60';
            pleaData.yourExpenses.other.telephone = '50';
            pleaData.yourExpenses.other.loanRepayments = '150';
            pleaData.yourExpenses.other.countyCourtOrders = '5';
            pleaData.yourExpenses.other.fines = '0';
            pleaData.yourExpenses.other.childMaintenance = '80';
            pleaData.yourExpenses.other.otherSignificantExpenses = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.justification).toEqual('I will lose my house');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.accommodation).toEqual('1000');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.utilityBills).toEqual('200');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.insurance).toEqual('30');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.councilTax).toEqual('120');
            expect(result.financialMeans.benefits.financialProblems.expenses.household.otherContributors).toEqual(false);
            expect(result.financialMeans.benefits.financialProblems.expenses.other.televisionSubscriptions).toEqual('30');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.travelExpenses).toEqual('60');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.telephone).toEqual('50');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.loanRepayments).toEqual('150');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.countyCourtOrders).toEqual('5');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.fines).toEqual('0');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.childMaintenance).toEqual('80');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(false);
          });
          it ('and other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Receiving out of work benefits';

            pleaData.yourBenefits = {};
            pleaData.yourBenefits.financialProblems = 'Yes';

            pleaData.yourExpenses = {};
            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.contribute = 'Yes';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.otherSignificantExpenses = 'Yes';
            pleaData.yourExpenses.other.otherSignificantExpensesDetails = 'Big expenses';
            pleaData.yourExpenses.other.otherSignificantExpensesTotal = '95';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.benefits.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.expenses.household.otherContributors).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(true);
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.details).toEqual('Big expenses');
            expect(result.financialMeans.benefits.financialProblems.expenses.other.otherSignificantExpenses.amount).toEqual('95');
          });

        });
      });

      describe('when defendant has other source of income', function() {
        it('should have basic information extracted', function() {
          pleaData.yourPlea = {};
          pleaData.yourPlea.plea = 'Guilty';

          pleaData.yourEmployment = {};
          pleaData.yourEmployment.employmentStatus = 'Other';
          pleaData.yourEmployment.provideDetails = 'Student';
          pleaData.yourEmployment.sourceIncome = 'Interest';
          pleaData.yourEmployment.paymentAmount = '100';
          pleaData.yourEmployment.paymentFrequency = 'Weekly';
          pleaData.yourEmployment.pensionCredit = 'No';

          var result = transformPleaData(pleaData);

          expect(result.financialMeans.status).toEqual('Other');
          expect(result.financialMeans.payment.amount).toEqual('100');
          expect(result.financialMeans.payment.frequency).toEqual('Weekly');
          expect(result.financialMeans.provideDetails).toEqual('Student');
          expect(result.financialMeans.pensionCredit.yes).toEqual(false);
          expect(result.financialMeans.financialProblems.yes).toEqual(false);
        });

        it ('should have pension credit extracted when available', function() {
          pleaData.yourPlea = {};
          pleaData.yourPlea.plea = 'Guilty';

          pleaData.yourEmployment = {};
          pleaData.yourEmployment.employmentStatus = 'Other';
          pleaData.yourEmployment.pensionCredit = 'Yes';

          pleaData.yourPensionCredit = {};
          pleaData.yourPensionCredit.pensionCreditFrequency = 'Monthly';
          pleaData.yourPensionCredit.pensionCreditAmount = '150';

          var result = transformPleaData(pleaData);
          expect(result.financialMeans.pensionCredit.yes).toEqual(true);
          expect(result.financialMeans.pensionCredit.payment.amount).toEqual('150');
          expect(result.financialMeans.pensionCredit.payment.frequency).toEqual('Monthly');
        });

        describe('and has financial problems', function() {
          it ('and no other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';
            pleaData.yourEmployment.employmentStatus = 'Other';
            pleaData.yourEmployment.financialProblems = 'Yes';
            pleaData.yourEmployment.financialProblemsJustification = 'I will lose my house';

            pleaData.yourExpenses = {};
            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.accommodation = '1000';
            pleaData.yourExpenses.household.utilityBills = '200';
            pleaData.yourExpenses.household.insurance = '30';
            pleaData.yourExpenses.household.councilTax = '120';
            pleaData.yourExpenses.household.contribute = 'No';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.televisionSubscription = '30';
            pleaData.yourExpenses.other.travelExpenses = '60';
            pleaData.yourExpenses.other.telephone = '50';
            pleaData.yourExpenses.other.loanRepayments = '150';
            pleaData.yourExpenses.other.countyCourtOrders = '5';
            pleaData.yourExpenses.other.fines = '0';
            pleaData.yourExpenses.other.childMaintenance = '80';
            pleaData.yourExpenses.other.otherSignificantExpenses = 'No';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.financialProblems.justification).toEqual('I will lose my house');
            expect(result.financialMeans.financialProblems.expenses.household.accommodation).toEqual('1000');
            expect(result.financialMeans.financialProblems.expenses.household.utilityBills).toEqual('200');
            expect(result.financialMeans.financialProblems.expenses.household.insurance).toEqual('30');
            expect(result.financialMeans.financialProblems.expenses.household.councilTax).toEqual('120');
            expect(result.financialMeans.financialProblems.expenses.household.otherContributors).toEqual(false);
            expect(result.financialMeans.financialProblems.expenses.other.televisionSubscriptions).toEqual('30');
            expect(result.financialMeans.financialProblems.expenses.other.travelExpenses).toEqual('60');
            expect(result.financialMeans.financialProblems.expenses.other.telephone).toEqual('50');
            expect(result.financialMeans.financialProblems.expenses.other.loanRepayments).toEqual('150');
            expect(result.financialMeans.financialProblems.expenses.other.countyCourtOrders).toEqual('5');
            expect(result.financialMeans.financialProblems.expenses.other.fines).toEqual('0');
            expect(result.financialMeans.financialProblems.expenses.other.childMaintenance).toEqual('80');
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(false);
          });

          it ('and other expenses', function() {
            pleaData.yourPlea.plea = 'Guilty';

            pleaData.yourEmployment = {};
            pleaData.yourEmployment.employmentStatus = 'Other';
            pleaData.yourEmployment.financialProblems = 'Yes';

            pleaData.yourExpenses = {};
            pleaData.yourExpenses.household = {};
            pleaData.yourExpenses.household.contribute = 'Yes';

            pleaData.yourExpenses.other = {};
            pleaData.yourExpenses.other.otherSignificantExpenses = 'Yes';
            pleaData.yourExpenses.other.otherSignificantExpensesDetails = 'Big expenses';
            pleaData.yourExpenses.other.otherSignificantExpensesTotal = '95';

            var result = transformPleaData(pleaData);
            expect(result.financialMeans.financialProblems.yes).toEqual(true);
            expect(result.financialMeans.financialProblems.expenses.household.otherContributors).toEqual(true);
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.yes).toEqual(true);
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.details).toEqual('Big expenses');
            expect(result.financialMeans.financialProblems.expenses.other.otherSignificantExpenses.amount).toEqual('95');
          });

        });
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
