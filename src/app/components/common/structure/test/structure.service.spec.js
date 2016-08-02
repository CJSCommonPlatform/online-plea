describe('structureService', function () {

  'use strict';
  var $httpBackend,
    service,
    apiCallsService,
    promiseValue,
    READ_URL,
    WRITE_URL,
    errorMethod;

  var suspectId = 'cc12e1bf-7b64-480d-87db-7885f05d3642';
  var defendantId = 'cc12e1bf-7b64-480d-87db-7885f05d3642';
  var caseId = 'cc12e1bf-7b64-480d-87db-7885f05d3640';
  var offenceId = 'c6093b0f-4f47-4d62-827c-14836768cae9';
  var caseUrn = 'TFL0012345';
  var casePostcode = 'AB12CD';
  var caseJson = { id: 12345 };
  var witnessesJson = { witnesses: [{ id: 54321 }]};
  var policeSummariesJson = { policeSummaries: [{ id: 12345, outlineHeading: 'KEVD', outlineText: 'Some value' }]};
  var searchTerm = 'Smith';
  var casesJson = {hits: [caseJson]};
  var idpcJson = { id: 12345 };

  var plea = "NOT_GUITLY";
  var makePleaJson = {
    personalDetails: {
      detailsCorrected: { yes: true },
      contactNumber: '07123456789',
      dateOfBirth: '1980-01-01',
      nationalInsuranceNumber: { yes: false }
    },
    pleas: [
      {
        plea: plea,
        offenceId: offenceId,
        notGuiltyBecause: "I didn't do it, it was my evil twin.",
        interpreter: { yes: false },
        prosecutorWitness: { disagree: false },
        defenceWitness: { call: false }
      }
    ]
  };
  var response202Json = { commandResponseId: '45b0c3fe-afe6-4652-882f-7882d79eadd9' };

  var bailStatus = "inCustody";
  var updateBailSatus = { "bailStatus": bailStatus };

  beforeEach(module('cpp-ui-spa-master.structure'));

  function setPromiseValue(result) {
    promiseValue = result;
  }

  beforeEach(inject(function (_$httpBackend_, globalConfig, _apiCallsService_, _structureService_) {
    $httpBackend = _$httpBackend_;
    apiCallsService = _apiCallsService_;
    service = _structureService_;

    READ_URL = globalConfig.apiRoot + '/structure-query-api/query/api/rest/structure/';
    WRITE_URL = globalConfig.apiRoot + '/structure-command-api/command/api/rest/structure/';
    promiseValue = null;

    errorMethod = undefined;
  }));

  describe('when getting a case by URN and postcode', function () {
    var url;

    beforeEach(function () {
      url = READ_URL + 'cases-for-citizen?urn=' + caseUrn + '&postcode=' + casePostcode;
      $httpBackend.whenGET(url)
        .respond(caseJson);
    });

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should request a case by URN from the backend', function () {
      var paramsObj = {
        caseUniqueReferenceNumber: caseUrn,
        casePostcode: casePostcode
      }
      $httpBackend.expectGET(url);
      service.getCaseByUrnAndPostcode(paramsObj).then(setPromiseValue);
      $httpBackend.flush();
      expect(promiseValue.data).toEqual(caseJson);
    });

  });

  describe('when submitting a plea', function () {

    var eventuallyPleaSubmitted;
    var url;

    beforeEach(function () {
      url = WRITE_URL + 'cases/' + caseId + '/defendant/' + defendantId + '/make-plea';
      $httpBackend.whenPOST(url)
        .respond(function () {
          return [202, response202Json];
        });
      eventuallyPleaSubmitted = service.makePlea(caseId, defendantId, makePleaJson);
    });

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should post a plea update command to the backend', function () {
      $httpBackend.expectPOST(url, makePleaJson);
      $httpBackend.flush();
    });

    it('should get a command response ID from the backend', function () {
      eventuallyPleaSubmitted.then(setPromiseValue);
      $httpBackend.flush();
      expect(promiseValue.data).toEqual(response202Json);
      expect(promiseValue.status).toEqual(202);
    });
  });

});
