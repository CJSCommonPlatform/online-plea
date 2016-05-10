// ==========================================================================
// Employment Status
// ==========================================================================


(function() {
  'use strict';
  
  angular
    .module('pleaApp')
    .constant('employmentStatus', {
      
      EMPLOYED: 'Employed',
      
      EMPLOYED_BENEFITS: 'Employed and also receiving benefits',
      
      SELF_EMPLOYED: 'Self employed',
      
      SELF_EMPLOYED_BENEFITS: 'Self employed and also receiving benefit',
      
      OUT_OF_WORK_BENEFITS: 'Receiving out of work benefits',
       
      OTHER: 'Other'
      
    });

})();

