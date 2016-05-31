(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('sessionStorage', sessionStorage);

  sessionStorage.$inject = ['$sessionStorage', 'lodash'];

  function sessionStorage($sessionStorage, lodash) {
    var service = {
      reset: reset,
      getGetter: getGetter,
      getSetter: getSetter
    };

    return service;

    function reset(baseName) {
      var set = getSetter(baseName);
      set('', undefined);
    }

    function getGetter(baseName) {
      return function(propertyName) {
        return lodash.get($sessionStorage, baseName + propertyName);
      }
    }

    function getSetter(baseName) {
      return function(propertyName, propertyValue) {
        lodash.set($sessionStorage, baseName + propertyName, propertyValue);
      }
    }
  }
})();
