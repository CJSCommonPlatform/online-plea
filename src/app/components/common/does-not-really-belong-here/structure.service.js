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
    .module('pleaApp')
    .factory('structureService', structureService);

  function structureService(apiCallsService) {

    var service = {
      getCaseByUrn: getCaseByUrn,
      getCaseById: getCaseById,
      getWitnessUsedStatementsByCaseId: getWitnessUsedStatementsByCaseId,
      getPoliceSummaryByCaseId : getPoliceSummaryByCaseId,
      getCaseDocumentsByCaseId: getCaseDocumentsByCaseId,
      getDefendantsByCaseId: getDefendantsByCaseId,
      searchCases : searchCases,
      getIdpc: getIdpc,
      getNominalView: getNominalView,
      makePlea: makePlea,
      updatePlea: updatePlea,
      updateIndicatedPlea: updateIndicatedPlea,
      updateBailStatus: updateBailStatus,
      getNextReadySjpCase: getNextReadySjpCase
    };

    return service;

    /**
     * @ngdoc method
     * @name getCaseById
     * @methodOf cpp-ui-spa-master.structure
     * @description Gets case by the id
     * @param {string} caseId 'unique identifier of the case'
     * @returns {object} promise
     */
    function getCaseById(caseId) {
      return executeQuery(
        '/cases/' + caseId,
        'application/vnd.structure.query.case+json',
        'getCaseById'
      );
    }

    /**
     * @ngdoc method
     * @name getCaseByUrn
     * @methodOf cpp-ui-spa-master.structure
     * @description Gets case by the URN
     * @param {string} case URN 'case identifier'
     * @returns {object} promise
     */
    function getCaseByUrn(caseUrn) {
      return executeQuery(
        '/cases?urn=' + caseUrn,
        'application/vnd.structure.query.case-by-urn+json',
        'getCaseByUrn'
      );
    }

    /**
     * @ngdoc method
     * @name getWitnessUsedStatementsByCaseId
     * @methodOf cpp-ui-spa-master.structure
     * @description Gets statements for a witness for a case
     * @param {string} caseId 'unique identifier of the case'
     * @returns {object} promise
     */
    function getWitnessUsedStatementsByCaseId(caseId) {
      return executeQuery(
        '/cases/' + caseId + '/witnesses',
        'application/vnd.structure.query.case-witnesses+json',
        'getWitnessUsedStatementsByCaseId'
      );
    }

    /**
     * @ngdoc method
     * @name getPoliceSummaryByCaseId
     * @methodOf cpp-ui-spa-master.structure
     * @description Gets police summary for a case
     * @param {string} caseId 'unique identifier of the case'
     * @returns {object} promise
     */
    function getPoliceSummaryByCaseId(caseId) {
      return executeQuery(
        '/cases/' + caseId + '/police-summaries',
        'application/vnd.structure.query.case-police-summaries+json',
        'getPoliceSummaryByCaseId'
      );
    }

    /**
     * @ngdoc method
     * @name getCaseDocumentsByCaseId
     * @methodOf cpp-ui-spa-master.structure
     * @description
     * Gets the documents associated to a case
     * @param {string} caseId 'unique identifier of the case'
     * @returns {object} promise
     */
    function getCaseDocumentsByCaseId(caseId) {
      return executeQuery(
        '/cases/' + caseId + '/documents',
        'application/vnd.structure.query.case-documents+json',
        'getCaseDocumentsByCaseId'
      );
    }

    /**
     * @ngdoc method
     * @name getDefendantsByCaseId
     * @methodOf cpp-ui-spa-master.structure
     * @description
     * Gets the defendants associated to a case
     * @param {string} caseId 'unique identifier of the case'
     * @returns {object} promise
     */
    function getDefendantsByCaseId(caseId) {
      return executeQuery(
        '/cases/' + caseId + '/defendants',
        'application/vnd.structure.query.case-defendants+json',
        'getDefendantsByCaseId'
      );
    }

    /**
     * @ngdoc method
     * @name searchCases
     * @methodOf cpp-ui-spa-master.structure
     * @description Search the cases with the term provided
     * @param {string} searchTerm 'string search'
     * @returns {object} promise
     */
    function searchCases(searchTerm) {
      return executeQuery(
        '/search?q=' + searchTerm,
        'application/vnd.structure.query.cases-search+json',
        'searchCases'
      );
    }

    /**
     * @ngdoc method
     * @name getIdpc
     * @methodOf cpp-ui-spa-master.structure
     * @description Get the IDPC related to a case and a sospect
     * @param {string} caseId 'unique identifier of the case'
     * @param {string} suspectId 'suspect unique identifier'
     * @returns {object} promise
     */
    function getIdpc(caseId, suspectId) {
      return executeQuery(
        '/cases/' + caseId + '/suspect/' + suspectId + '/idpc',
        'application/vnd.structure.query.idpc+json',
        'getIdpc'
      );
    }

    /**
     * @ngdoc method
     * @name getNominalView
     * @methodOf cpp-ui-spa-master.structure
     * @description Gets a overall view of the unassigned cases
     * @returns {object} promise
     */
    function getNominalView() {
      return executeQuery(
        '/cases/nominalview',
        'application/vnd.structure.query.cases-nominal+json',
        'getNominalView'
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

    /**
     * @ngdoc method
     * @name updatePlea
     * @methodOf cpp-ui-spa-master.structure
     * @description Update a plea in a case
     * @param {string} caseId unique identifier of the case
     * @param {string} offenceId unique identifier of the offence
     * @param {string} plea the suspect's plea
     * @returns {object} promise
     */
    function updatePlea(caseId, offenceId, plea) {
      return executeCommand('/cases/' + caseId + '/offences/' + offenceId + '/pleas',
        { plea: plea },
        'application/vnd.structure.command.update-plea+json',
        'updatePlea');
    }

    /**
     * @ngdoc method
     * @name updateIndicatedPlea
     * @methodOf cpp-ui-spa-master.structure
     * @description Update an indicated plea in a case
     * @param {string} caseId unique identifier of the case
     * @param {string} offenceId unique identifier of the offence
     * @param {string} indicatedPlea the suspect's indicated plea
     * @returns {object} promise
     */
    function updateIndicatedPlea(caseId, offenceId, indicatedPlea) {
      return executeCommand('/cases/' + caseId + '/offences/' + offenceId + '/indicated-pleas',
        { indicatedPlea: indicatedPlea },
        'application/vnd.structure.command.update-indicated-plea+json',
        'updateIndicatedPlea');
    }

    /**
     * @ngdoc method
     * @name updateBailStatus
     * @methodOf cpp-ui-spa-master.structure
     * @description Update bail status for a suspect
     * @param {string} caseId the Case ID
     * @param {string} defendantId the defendantId ID
     * @param {string} bailStatus the defendant's bail status
     * @returns {object} promise
     */
    function updateBailStatus(caseId, defendantId, bailStatus) {
      return executeCommand(
        '/cases/' + caseId + '/defendants/' + defendantId,
        { bailStatus: bailStatus },
        'application/vnd.structure.command.update-bail-status-for-defendant+json',
        'updateBailStatus'
      );
    }

    /**
     * @ngdoc method
     * @name getNextReadySjpCase
     * @methodOf cpp-ui-spa-master.structure
     * @description Gets the next Case that is ready for a Decision.
     * @param {objects} excludedCases the case IDs that should not be returned (optional)
     * @returns {object} promise
     */
    function getNextReadySjpCase(excludedCases) {
      if (excludedCases === undefined) {
        return executeQuery(
          '/next-ready-sjp-case',
          'application/vnd.structure.query.next-ready-sjp-case+json',
          'getNextReadySjpCase'
        );
      }
      return executeQuery(
        '/next-ready-sjp-case?exclude=' + excludedCases,
        'application/vnd.structure.query.next-ready-sjp-case+json',
        'getNextReadySjpCase'
      );
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
