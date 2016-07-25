/**
 * @ngdoc service
 * @name cpp-ui-spa-master.structure
 *
 * @description
 * # structureService
 * Service in the cpp-ui-spa-master.structure app.
 */

(function () {

  'use strict';

  angular
    .module('cpp-ui-spa-master.structure')
    .factory('structureService', structureService);

  function structureService(apiCallsService) {

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
      return apiCallsService.query({
        endPoint: QUERY_URL + path,
        mimeType: media,
        error: funcName
      });
    }

    function executeCommand(path, data, media, funcName) {
      var COMMAND_URL = '/structure-command-api/command/api/rest/structure';
      return apiCallsService.command({
        endPoint: COMMAND_URL + path,
        mimeType: media,
        data: data,
        error: funcName
      });
    }
  }

}());
