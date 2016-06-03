// ==========================================================================
// Directives
// ==========================================================================

/* eslint-disable */

// Form focus

// angular.module('pleaApp').directive('focusMe', function($timeout, $parse) {
//   return {
//     link: function(scope, element, attrs) {
//       var model = $parse(attrs.focusMe);
//       scope.$watch(model, function(value) {
//         if(value === true) { 
//           $timeout(function() {
//             element[0].focus(); 
//           });
//         }
//       });
//       // to address @blesh's comment, set attribute value to 'false'
//       // on blur event:
//       element.bind('blur', function() {
//          scope.$apply(model.assign(scope, false));
//       });
//     }
//   };
// });

// angular
//   .module('pleaApp')
//   .directive('focusMe', function($timeout, $parse) {
//     return {
//       link: function(scope, element, attrs) {
//         var model = $parse(attrs.focusMe);
//         scope.$watch(model, function(value) {
//           if(value === true) { 
//             element[0].focus();
//             scope[attrs.focusMe] = true;
//           }
//         });
//         element.bind('blur', function() {
//            scope.$apply(model.assign(scope, false));
//         });
//       }
//     };
// });

// angular
//   .module('pleaApp')
//   .directive('focusOn', function() {
//     return {
//       restrict: 'A',
//       scope: {

//       },
//       controller: 'focusOnController'
//       link: function(scope, element, attr) {
//         scope.$on(attr.focusOn, function(e) {
//           console.log(attr.focusOn);
//           element[0].focus(); 
//         });
//       }
//     };
//   })
//   .controller(function ($scope) {
//     $scope.addHearing = function() {
     
//     };
//   });

// angular
//   .module('pleaApp')
//   .directive('ngFocus', ['$parse', function($parse) {
//     return function(scope, element, attr) {
//         var fn = $parse(attr['ngFocus']);
//         console.log(fn.ngFocus);
//         element.on('focus', function(event) {
//             scope.$apply(function() {
//                 fn(scope, {$event:event});
//             });
//         });
//     };
// }]);

// angular
//   .module('pleaApp')
//   .directive('ngBlur', ['$parse', function($parse) {
//     return function(scope, element, attr) {
//         var fn = $parse(attr['ngBlur']);
//         element.on('blur', function(event) {
//             scope.$apply(function() {
//                 fn(scope, {$event:event});
//             });
//         });
//     };
// }]);

// angular.module('pleaApp').directive('scrollToItem', function() {                                                      
//   return {                                                                                 
//     restrict: 'A',                                                                       
//     scope: {                                                                             
//       scrollTo: "@"                                                                    
//     },                                                                                   
//     link: function(scope, elm, attr) {                                                   
//       elm.on('click', function() {    
//         $(scope.scrollTo).focus();                                             
//       });                                                                              
//     }                                                                                    
// }}); 


// Form selection

angular.module('pleaApp').directive('formSelection', function() {

  var SelectionButtons = function (elmsOrSelector, opts) {
    var $elms;

    this.selectedClass = 'selected';
    this.focusedClass = 'focused';
    if (opts !== undefined) {
      $.each(opts, function (optionName, optionObj) {
        this[optionName] = optionObj;
      }.bind(this));
    }
    if (typeof elmsOrSelector === 'string') {
      $elms = $(elmsOrSelector);
      this.selector = elmsOrSelector;
      this.setInitialState($(this.selector));
    } else if (elmsOrSelector !== undefined) {
      this.$elms = elmsOrSelector;
      this.setInitialState(this.$elms);
    }
    this.addEvents();
  };
  
  SelectionButtons.prototype.addEvents = function () {
    if (typeof this.$elms !== 'undefined') {
      this.addElementLevelEvents();
    } else {
      this.addDocumentLevelEvents();
    }
  };
  
  SelectionButtons.prototype.setInitialState = function ($elms) {
    $elms.each(function (idx, elm) {
      var $elm = $(elm);

      if ($elm.is(':checked')) {
        this.markSelected($elm);
      }
    }.bind(this));
  };
  
  SelectionButtons.prototype.markFocused = function ($elm, state) {
    if (state === 'focused') {
      $elm.parent('label').addClass(this.focusedClass);
    } else {
      $elm.parent('label').removeClass(this.focusedClass);
    }
  };
  
  SelectionButtons.prototype.markSelected = function ($elm) {
    var radioName;

    if ($elm.attr('type') === 'radio') {
      radioName = $elm.attr('name');
      $($elm[0].form).find('input[name="' + radioName + '"]')
        .parent('label')
        .removeClass(this.selectedClass);
      $elm.parent('label').addClass(this.selectedClass);
    } else { // checkbox
      if ($elm.is(':checked')) {
        $elm.parent('label').addClass(this.selectedClass);
      } else {
        $elm.parent('label').removeClass(this.selectedClass);
      }
    }
  };
  
  SelectionButtons.prototype.addElementLevelEvents = function () {
    this.clickHandler = this.getClickHandler();
    this.focusHandler = this.getFocusHandler({ 'level' : 'element' });

    this.$elms
      .on('click', this.clickHandler)
      .on('focus blur', this.focusHandler);
  };
  
  SelectionButtons.prototype.addDocumentLevelEvents = function () {
    this.clickHandler = this.getClickHandler();
    this.focusHandler = this.getFocusHandler({ 'level' : 'document' });

    $(document)
      .on('click', this.selector, this.clickHandler)
      .on('focus blur', this.selector, this.focusHandler);
  };
  
  SelectionButtons.prototype.getClickHandler = function () {
    return function (e) {
      this.markSelected($(e.target));
    }.bind(this);
  };
  
  SelectionButtons.prototype.getFocusHandler = function (opts) {
    var focusEvent = (opts.level === 'document') ? 'focusin' : 'focus';

    return function (e) {
      var state = (e.type === focusEvent) ? 'focused' : 'blurred';

      this.markFocused($(e.target), state);
    }.bind(this);
  };
  
  SelectionButtons.prototype.destroy = function () {
    if (typeof this.selector !== 'undefined') {
      $(document)
        .off('click', this.selector, this.clickHandler)
        .off('focus blur', this.selector, this.focusHandler);
    } else {
      this.$elms
        .off('click', this.clickHandler)
        .off('focus blur', this.focusHandler);
    }
  };

  return {
    restrict: 'A',
    link: function(scope, element) {
      var $el = element.find('.block-label input[type="radio"], .block-label input[type="checkbox"]');
      new SelectionButtons($el);
    },
  }
  
});

/* eslint-enable */
