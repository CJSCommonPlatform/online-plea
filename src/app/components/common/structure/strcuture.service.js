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
      getCaseByUrnAndPostcode: getCaseByUrnAndPostcode,
      makePlea: makePlea
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
        'application/vnd.structure.query.case-by-urn-postcode+json',
        'getCaseByUrnAndPostcode'
      );
    }

    /**
     * @ngdoc method
     * @name makePlea
     * @methodOf cpp-ui-spa-master.structure
     * @description Plead for offences of a defendant in a case
     * @param {string} caseId unique identifier of the case
     * @param {string} defendantId unique identifier of the defendant
     * @param {string} pleaData pleas and associated data (expenses, etc.)
     * @returns {object} promise
     */
    function makePlea(caseId, defendantId, pleaData) {
      return executeCommand('/cases/' + caseId + '/defendant/' + defendantId + '/make-plea',
        pleaData,
        'application/vnd.structure.command.make-plea+json',
        'makePlea');
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

    function executeCommand(path, data, media, funcName) {
      var COMMAND_URL = '/structure-command-api/command/api/rest/structure';
      return $http({
        method: 'POST',
        url: 'http://localhost:8000' + COMMAND_URL + path,
        data: data,
        headers: {
          'Content-Type': media
        }
      })
      .catch(function (respError) {
        respError.method = funcName;
        return $q.reject(respError);
      });
    }

  }

}());
