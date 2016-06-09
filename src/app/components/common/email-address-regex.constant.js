/*

http://emailregex.com

*/

(function() {
  'use strict';

  angular
    .module('pleaApp')
    .constant('emailAddressRegex', '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

})();


