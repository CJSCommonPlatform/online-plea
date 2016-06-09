(function() {

  'use strict';  

  angular.module('pleaApp')
    .factory('formValidation', formValidation);

  function formValidation() {
    var service = {
      validate: validate
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
      _.forEach(formProperties, function (formProperty) {
        form[formProperty].error = JSON.parse(JSON.stringify(form[formProperty].$error));
      });
      form.invalid = form.$invalid;
    }
        
  }
  
})();