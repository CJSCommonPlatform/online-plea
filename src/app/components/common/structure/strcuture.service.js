/**
 * @ngdoc service
 * @name pleaApp
 *
 * @description
 * # structureService
 * Service in the pleaApp app.
 */

(function () {

  'use strict';

  angular
    .module('pleaApp')
    .factory('structureService', structureService);

  structureService.$inject = ['$http', '$q'];

  function structureService($http, $q) {

    var service = {
      getCaseByUrnAndPostcode: getCaseByUrnAndPostcode
    };

    return service;

    /**
     * @ngdoc method
     * @name getCaseByUrnAndPostcode
     * @description Get case by a combination of the URN and postcode
     * @param {obj} case URN & Postcode
     * @returns {object} promise
     */
    function getCaseByUrnAndPostcode(obj) {
      return executeQuery(
        '/cases-for-citizen?urn=' + obj.caseUniqueReferenceNumber + '&postcode=' + obj.casePostcode,
        'application/vnd.structure.query.case-by-urn+json',
        'getCaseByUrnAndPostcode'
      );
    }

    function executeQuery(path, media, funcName) {
      var QUERY_URL = '/structure-query-api/query/api/rest/structure';
      return $http({
        method: 'GET',
        url: 'http://localhost:8000' + QUERY_URL + path,
        headers: {
          'Accept': media
        }
      })
      .catch(function (respError) {
        respError.method = funcName;
        return $q.reject(respError);
      });

    }
    
  }

}());
