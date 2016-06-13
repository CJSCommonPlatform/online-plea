/*

^                 # beginning of string
\s*               # optional leading whitespace
[a-zA-Z]{2}       # match two letters
(?:\s*\d\s*){6}   # six digits, with optional whitespace leading/trailing
[a-zA-Z]?         # zero or one letter
\s*               # optional trailing whitespace (just in case)
$                 # end of string

http://stackoverflow.com/questions/10204378/regular-expression-to-validate-uk-national-insurance-number

*/

(function() {
  'use strict';

  angular
    .module('pleaApp')
    .constant('nationalInsuranceNumberRegex', '^\\s*[a-zA-Z]{2}(?:\\s*\\d\\s*){6}[a-zA-Z]?\\s*$');

})();