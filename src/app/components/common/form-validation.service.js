(function() {

  'use strict';  

  angular.module('pleaApp')
    .factory('formValidation', formValidation);

  function formValidation() {
    var service = {
      validate: validate,
      validateDate: validateDate
    }

    return service;

    function validate(form) {
      
      var formProperties = _.filter(Object.keys(form), function(key) {
        return !key.startsWith('$');
      });
      formProperties = _.filter(formProperties, function(formProperty) {
        return angular.isObject(form[formProperty]);
      });
      _.forEach(formProperties, function (formProperty) {
        form[formProperty].invalid = form[formProperty].$invalid;
      });
      form.invalid = form.$invalid;
    }
    
    function validateDate(form, year, month, day) {
      var date = new Date(form[year].$modelValue, form[month].$modelValue + 1, form[day].$modelValue);
      var invalid = (date === 'Invalid Date');
            
      form[year].invalid = invalid;
      form[month].invalid = invalid;
      form[day].invalid = invalid;
    }
    
  }
  
})();