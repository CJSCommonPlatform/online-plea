(function() {
  
  'use strict';

  angular
    .module('pleaApp')
    .factory('yourDetailsRetrieve', yourDetailsRetrieve);

  function yourDetailsRetrieve() {

    var service = {
      retrieve: retrieve
    };

    return service;

    function retrieve() {

      var yourDetails = {
        title: 'Mr',
        firstName: 'Mike',
        lastName: 'Mouse',
        address:{
          street: '38A Baker Street',
          city: 'London',
          postcode: '007 007' 
        }
      }
      
      return yourDetails;
    
    }

  }
  
})();
