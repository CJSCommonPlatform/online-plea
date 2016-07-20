describe('structureService', function () {

  'use strict';
  var $httpBackend,
    service,
    globalConfig,
    promiseValue,
    READ_URL,
    WRITE_URL,
    errorMethod;

  var suspectId = 'cc12e1bf-7b64-480d-87db-7885f05d3642';
  var defendantId = 'cc12e1bf-7b64-480d-87db-7885f05d3642';
  var caseId = 'cc12e1bf-7b64-480d-87db-7885f05d3640';
  var offenceId = 'c6093b0f-4f47-4d62-827c-14836768cae9';
  var caseUrn = 'TFL0012345';

  beforeEach(module(
    'cpp-ui-spa-master',
    'cpp-ui-spa-master.application',
    'cpp-ui-spa-master.structure'
  ));

  function setPromiseValue(result) {
    promiseValue = result;
  }

  beforeEach(inject(function (_$httpBackend_, _globalConfig_, _apiCallsService_, _structureService_) {
    $httpBackend = _$httpBackend_;
    globalConfig = _globalConfig_;
    apiCallsService = _apiCallsService_;
    service = _structureService_;

    globalConfig.apiRoot = "http://test";
    promiseValue = null;

    errorMethod = undefined;
  }));

  describe('when getting a case by URN', function () {

    beforeEach(function () {
      $httpBackend.whenGET(READ_URL + 'cases?urn=' + caseUrn)
        .respond(caseJson);
    });

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should request a case by URN from the backend', function () {
      $httpBackend.expectGET(READ_URL + 'cases?urn=' + caseUrn);
      service.getCaseByUrn(caseUrn).then(setPromiseValue);
      $httpBackend.flush();
      expect(promiseValue.data).toEqual(caseJson);
    });

  });

  describe('when getting a case by ID', function () {

    beforeEach(function () {
      $httpBackend.whenGET(READ_URL + 'cases/' + caseId)
        .respond(caseJson);
    });

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should request a case by ID from the backend', function () {
      $httpBackend.expectGET(READ_URL + 'cases/' + caseId);
      service.getCaseById(caseId).then(setPromiseValue);
      $httpBackend.flush();
      expect(promiseValue.data).toEqual(caseJson);
    });

  });

  describe('when failing to get case by URN', function () {

    beforeEach(function () {
      $httpBackend.whenGET(READ_URL + 'cases?urn=' + caseUrn)
        .respond(function () {
          return [500];
        });
    });

    afterEach(function () {
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should set the method name on error object', function () {
      service.getCaseByUrn(caseUrn).catch(setErrorMethod);
      $httpBackend.flush();
      expect(errorMethod).toEqual('getCaseByUrn');
    });

  });

  function setErrorMethod(data) {
    errorMethod = data.method;
  }

});
