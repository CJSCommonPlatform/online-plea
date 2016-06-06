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
        if (form[formProperty] instanceof Object) {
          form[formProperty].invalid = form[formProperty].$invalid;
        }
      });
      form.invalid = form.$invalid;
  	}
  }
})();