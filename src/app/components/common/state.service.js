(function() {
  'use strict';

  angular
    .module('pleaApp')
    .factory('state', state);

  state.$inject = ['$state'];

  function state($state) {
    var service = {
      getNext: getNext,
      goNext: goNext,
      goPrevious: goPrevious,
      getPrevious: getPrevious
    };

    return service;

    function goNext(viewModel) {
      var nextState = getNext(viewModel);
      $state.go(nextState);
    }

    function goPrevious() {
      var previousState = getPrevious();
      $state.go(previousState);
    }

    function getPrevious() {
      if ($state.current.previous) {
        return $state.current.previous.name;
      }
    }

    function getNext(viewModel) {
      if (angular.isArray($state.current.data.nextState)) {
        return _getNextGivenViewModel(viewModel);
      }
      return $state.current.data.nextState;
    }

    function _getNextGivenViewModel(viewModel) {
      var propertyValue = _.get(viewModel, $state.current.data.propertyName);
      var constant = _.get(viewModel, $state.current.data.constantName);

      for (var i = 0; i < $state.current.data.nextState.length; i++) {
        var candidate = $state.current.data.nextState[i];
        var constantValue = _.get(constant, candidate.constantValue);

        if (propertyValue === constantValue) {
          return candidate.stateName;
        }
      }
    }
  }
})();
