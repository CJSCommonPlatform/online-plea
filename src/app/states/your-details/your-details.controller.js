(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourDetailsController', YourDetailsController);

  YourDetailsController.$inject = ['yourDetails', 'yourDetailsRetrieve', 'lodash', 'state', '$stateParams', 'formValidation', 'nationalInsuranceNumberRegex', 'emailAddressRegex', 'ukTelephoneNumberRegex'];

  function YourDetailsController(yourDetails, yourDetailsRetrieve, _, state, $stateParams, formValidation, nationalInsuranceNumberRegex, emailAddressRegex, ukTelephoneNumberRegex) {
    var vm = this;

    vm.validateNationalInsuranceNumber = function (value) {
      return vm.formData.nationalInsuranceNumber.yes !== true || (new RegExp(nationalInsuranceNumberRegex)).test(value);
    };

    vm.allRequired = function(year, month, day) {
      var y = year.$viewValue;
      var m = month.$viewValue;
      var d = day.$viewValue;
      return isNumeric(y) && isNumeric(m) && isNumeric(d);

      function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    };

    vm.inPast = function(year, month, day, threshold) {
      var y = year.$viewValue;
      var m = month.$viewValue;
      var d = day.$viewValue;
      var date = new Date(y, m - 1, d);
      var pastDate = new Date(threshold, 0, 1);
      return date.getTime() > pastDate.getTime();
    };

    vm.inFuture = function(year, month, day) {
      var y = year.$viewValue;
      var m = month.$viewValue;
      var d = day.$viewValue;
      var date = new Date(y, m - 1, d);
      var now = new Date();
      return date.getTime() < now.getTime();
    };

    vm.atLeast = function(year, month, day, age) {
      var y = year.$viewValue;
      var m = month.$viewValue;
      var d = day.$viewValue;
      var date = new Date(y, m, d);
      var minusAge = new Date();
      minusAge.setMonth(minusAge.getMonth() - 12 * age);
      return date.getTime() < minusAge.getTime();
    };

    vm.invalidDayOfMonth = function(year, month, day) {
      var y = year.$viewValue;
      var m = month.$viewValue;
      var d = parseInt(day.$viewValue);
      var lastDayOfMonth = new Date(y, m, 0).getDate();
      return d > 0 && d <= lastDayOfMonth;
    };

    vm.invalidMonth = function(month) {
      var m = parseInt(month.$viewValue);
      return m >= 1 && m <= 12;
    };

    vm.validateDay = function(day) {
      day.$validate();
      return true;
    };

    vm.emailAddressRegex = emailAddressRegex;
    vm.ukTelephoneNumberRegex = ukTelephoneNumberRegex;
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;
    vm.getNextState = getNextState;
    vm.scrollToAnchor = state.scrollToAnchor;

    vm.formData = transformDataIn(yourDetails.get());
    vm.defendantDetails = yourDetailsRetrieve.retrieve();

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);
      if (!vm.form.invalid) {
        yourDetails.set(transformDataOut(vm.formData));
        state.go(getNextState());
      }
    }

    var dateOfBirthResultFormat = 'YYYY-MM-DD';

    // this will become unnecessary when a component for a date field is introduced
    function transformDataIn(data) {
      var result = _.omit(data, ['dateOfBirth']);

      if (data.dateOfBirth) {
        var dateOfBirth = moment(data.dateOfBirth, dateOfBirthResultFormat);

        result.dateOfBirth = {
          day: dateOfBirth.date(),
          month: dateOfBirth.month() + 1,
          year: dateOfBirth.year()
        };
      }

      return result;
    }

    function transformDataOut(data) {
      var result = _.pick(data, ['contactNumber, email']);

      result.detailsCorrect = _.pick(data.detailsCorrect, data.detailsCorrect.yes
        ? ['yes']
        : ['yes', 'correctDetails']);

      result.dateOfBirth = moment({
        day: data.dateOfBirth.day,
        month: data.dateOfBirth.month - 1,
        year: data.dateOfBirth.year
      }).format(dateOfBirthResultFormat);

      result.nationalInsuranceNumber = _.pick(data.nationalInsuranceNumber, data.nationalInsuranceNumber.yes
        ? ['yes', 'NI']
        : ['yes']);

      return result;
    }

    function getNextState() {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }
  }
})();
