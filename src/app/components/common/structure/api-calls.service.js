(function () {

  'use strict';

  angular
    .module('cpp-ui-spa-master.structure')
    .factory('apiCallsService', apiCallsService);

  function apiCallsService($q, $http, globalConfig) {

    var service = {
      query: query,
      command: command
    };

    return service;

    function query(params) {
      return $http({
        method: 'GET',
        url: globalConfig.apiRoot + params.endPoint,
        headers: {
          'Accept': params.mimeType
        }
      })
      .catch(function (respError) {
        respError.method = params.error;
        return $q.reject(respError);
      });
    }

    function command(params) {
      return $http({
        method: 'POST',
        url: globalConfig.apiRoot + params.endPoint,
        data: params.data,
        headers: {
          'Content-Type': params.mimeType
        }
      })
      .catch(function (respError) {
        respError.method = params.error;
        return $q.reject(respError);
      });
    }

  }

}());
