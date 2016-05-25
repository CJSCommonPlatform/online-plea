(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('sessionStorage', sessionStorage);

  sessionStorage.$inject = ['$sessionStorage'];

  function sessionStorage($sessionStorage) {
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
        return _.get($sessionStorage, baseName + propertyName);
      }
    }

    function getSetter(baseName) {
      return function(propertyName, propertyValue) {
        _.set($sessionStorage, baseName + propertyName, propertyValue);
      }
    }
  }
})();
