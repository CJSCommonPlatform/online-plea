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
   * errorLabelId - id of the label to scroll to when summary item is clicked
   * label - text to show in the summary item (usually the same as input label)
   *
   * @example
      <error-summary
        form="vm.form"
        fields="[
          { name: 'postcode'
            errorLabelId: 'error-postcode',
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
