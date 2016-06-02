(function () {
		'use strict';

		angular
		  .module('pleaApp')
		  .directive('eventFocus', function($timeout, $window) {
		    return {
		    	restrict: 'A',
		      link: function(scope, elem, attr) {
		        elem.on(attr.eventFocus, function() {
		        	var id = attr.scrollTo;

		        	$timeout(function () {
		        		var element = $window.document.getElementById(id);
		        		if (element) {
		        			element.focus();
		        		}
		        	});

		        });
		        scope.$on('$destroy', function() {
		           elem.off(attr.eventFocus);
		        });
		      }
		    };
		});

})();










