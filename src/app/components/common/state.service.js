(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('state', state);

  state.$inject = ['$state', 'lodash'];

  function state($state, lodash) {
    var service = {
      getNext: getNext,
      goNext: goNext,
      go: go
    };

    return service;

    function go(stateName) {
      $state.go(stateName);
    }

    function goNext(viewModel) {
      var nextState = getNext(viewModel);
      $state.go(nextState);
    }

    function getNext(viewModel) {
      if (angular.isArray($state.current.data.nextState)) {
        return _getNextGivenViewModel(viewModel);
      }
      return $state.current.data.nextState;
    }

    function _getNextGivenViewModel(viewModel) {
      var propertyValue = lodash.get(viewModel, $state.current.data.propertyName);
      var constant = lodash.get(viewModel, $state.current.data.constantName);

      for (var i = 0; i < $state.current.data.nextState.length; i++) {
        var candidate = $state.current.data.nextState[i];
        var constantValue = lodash.get(constant, candidate.constantValue);

        if (propertyValue === constantValue) {
          return candidate.stateName;
        }
      }
    }
  }
})();
