'use strict';

var gutil = require('gulp-util');
var gulp = require('gulp');
var path = require('path');
var validate = require('gulp-html-angular-validate');

gulp.task('html-lint', function () {
  var options = {
    tmplext: 'tpl.html',
    customattrs: ['*'],
    customtags: ['*'],
    relaxerror: [
      "Element “head” is missing a required instance of child element “title”.",
      "Start tag seen without seeing a doctype first. Expected e.g. “<!DOCTYPE html>”."
    ],
    reportCheckstylePath: 'reports/html-angular-validate-report-checkstyle.xml',
    reportpath: 'reports/html-angular-validate-report.json',
    emitError: true,
    reportFn:function(fileFailures){
      for (var i = 0; i < fileFailures.length; i++) {
        var fileResult = fileFailures[i];
        gutil.log(fileResult.filepath);
        for (var j = 0; j < fileResult.errors.length; j++) {
          var err = fileResult.errors[j];
          if (err.line !== undefined) {
            gutil.log('[line' +err.line +', col: ' + err.col +'] ' +err.msg);
          } else {
            gutil.log(err.msg);
          }
        }
      }
    }
  };

  gulp.src('./src/**/*.html')
    .pipe(validate('./src/**/*.html', options));

});