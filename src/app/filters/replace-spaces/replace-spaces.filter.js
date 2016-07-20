(function() {

  'use strict';

  angular
  	.module('pleaApp')
    .filter('replaceSpaces', replaceSpacesFilter);

  function replaceSpacesFilter() {
  	return function(input) {
  		return input.replace(/\s/g, "-").toLowerCase();
  	}

  }

})();