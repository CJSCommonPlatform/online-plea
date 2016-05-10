(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('employment', {
          url: '/employment',
          templateUrl : 'your-employment.html',
          controller: 'EmploymentController',
          params: {
            goToStates: [
              {
                vmPropertyName: 'data.employment',
                vmPropertyValue: {
                  constantName: 'employmentStatus',
                  constantValue: 'EMPLOYED'
                },
                stateName: 'employment.employed.finances'
              },
              {
                vmPropertyName: 'data.employment',
                vmPropertyValue: {
                  constantName: 'employmentStatus',
                  constantValue: 'EMPLOYED_BENEFITS'
                },
                stateName: 'employment.employed-receiving-benefits.finances'
              },
              {
                vmPropertyName: 'data.employment',
                vmPropertyValue: {
                  constantName: 'employmentStatus',
                  constantValue: 'SELF_EMPLOYED'
                },
                stateName: 'employment.self-employed.finances'
              },
              {
                vmPropertyName: 'data.employment',
                vmPropertyValue: {
                  constantName: 'employmentStatus',
                  constantValue: 'SELF_EMPLOYED_BENEFITS'
                },
                stateName: 'employment.self-employed-receiving-benefits.finances'
              },
              {
                vmPropertyName: 'data.employment',
                vmPropertyValue: {
                  constantName: 'employmentStatus',
                  constantValue: 'OUT_OF_WORK_BENEFITS'
                },
                stateName: 'employment.out-of-work-benefits.finances'
              },
              {
                vmPropertyName: 'data.employment',
                vmPropertyValue: {
                  constantName: 'employmentStatus',
                  constantValue: 'OTHER'
                },
                stateName: 'employment.other.finances'
              }
            ]
          }
        })
    });  
})();