/*

http://emailregex.com

*/

(function() {
  'use strict';

  angular
    .module('pleaApp')
    .constant('emailAddressRegex', '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$');

})();