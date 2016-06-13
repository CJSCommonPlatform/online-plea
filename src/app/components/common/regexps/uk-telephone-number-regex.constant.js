/*

http://stackoverflow.com/questions/11518035/regular-expression-for-uk-based-and-only-numeric-phone-number-in-cakephp
https://www.aa-asterisk.org.uk/Number_format

*/

(function() {
  'use strict';

  angular
    .module('pleaApp')
    .constant('ukTelephoneNumberRegex', '^(?:(?:\\(?(?:0(?:0|11)\\)?[\\s-]?\\(?|\\+)44\\)?[\\s-]?(?:\\(?0\\)?[\\s-]?)?)|(?:\\(?0))(?:(?:\\d{5}\\)?[\\s-]?\\d{4,5})|(?:\\d{4}\\)?[\\s-]?(?:\\d{5}|\\d{3}[\\s-]?\\d{3}))|(?:\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{3,4})|(?:\\d{2}\\)?[\\s-]?\\d{4}[\\s-]?\\d{4}))(?:[\\s-]?(?:x|ext\\.?|\\#)\\d{3,4})?$');

})();