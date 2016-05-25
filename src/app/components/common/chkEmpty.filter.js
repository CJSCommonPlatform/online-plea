(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .filter('chkEmpty', chkEmpty);

  function chkEmpty() {
	return function(input) {

	if(angular.isString(input) && !(angular.equals(input,null) || angular.equals(input,'')))
		return input;
	else
		return '-';
	};
  }  
  
})();