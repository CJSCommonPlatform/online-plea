(function () {
  'use strict';

  /**
   * Error Summary
   *
   * A validation error summary section for given fields in a form
   * TODO: This component relies on the form using the form-validation service
   * to update its custom field validity states.
   *
   * @param form {ngFormController} - controller of the form field
   * @param fields {Array} - list of fields to be used. Values are expected
   * to be objects with the following keys set:
   * name - name of the input field
   * label - text to show in the summary item (usually the same as input label)
   * scrollToId - id of the element to scroll to when summary item is clicked
   *                (optional, default value is name with 'error-' prepended)
   * focusId - id of the element to focus summary item is clicked
   *                (optional, default value is name with 'error-' prepended)
   *
   * @example
      <error-summary
        form="vm.form"
        fields="[
          { name: 'postcode'
            label: 'Postcode'
          }
        ]">
      </error-summary>

      <form name="vm.form">
        <label for="postcode" id="error-postcode">
          Postcode
        </label>
        <input type="text" id="postcode" name="postcode" ng-pattern="...">
      </form>
   */

   angular
    .module('pleaApp')
    .component('errorSummary', {
      templateUrl: 'app/components/common/error-summary/error-summary.html',
      controller: ErrorSummaryController,
      controllerAs: 'vm',
      bindings: {
        form: '<',
        fields: '<'
      }
    });


  /* @ngInject */
  function ErrorSummaryController (lodash) {
    var vm = this;

    vm.invalidFields = function () {
      return lodash.reject(vm.fields, function (field) {
        return lodash.isEmpty(vm.form[field.name].error);
      });
    };
  }
})();
