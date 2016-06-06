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
        return formProperties instanceof angular.isObject(value)
      });
  		_.forEach(formProperties, function (value) {
        console.log(typeof form[value]);
        if (form[value] instanceof Object) {
	        form[value].invalid = form[value].$invalid;
        }
  		});
  		form.invalid = form.$invalid;
  	}
  }
})();