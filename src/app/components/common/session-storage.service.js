(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('sessionStorage', sessionStorage);

  sessionStorage.$inject = ['$sessionStorage', 'lodash'];

  function sessionStorage($sessionStorage, _) {
    var service = {
      reset: reset,
      getGetter: getGetter,
      getSetter: getSetter,
      createSubstorage: createSubstorage
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

    function createSubstorage (baseName, defaultValue) {
      function get () {
        var data = _.get($sessionStorage, baseName) || defaultValue;
        return _.cloneDeep(data);
      }

      function set (data) {
        _.set($sessionStorage, baseName, _.cloneDeep(data));
      }

      return {
        get: get,
        set: set
      };
    }
  }
})();
