'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var header = require('gulp-header');
const rename = require('gulp-rename');

const headerTemplate = `/* ==UserStyle==
@name           reddit toolbox dark userstyle
@namespace      https://github.com/dequeues/Reddit-Toolbox-Dark-Userstyle
@version        1.0.0
@description    Dark mode for reddit toolbox on new reddit
@author         dequeues
@supportURL     https://github.com/dequeues/Reddit-Toolbox-Dark-Userstyle/issues
@updateURL      NEED_TO_DO_SOMETHING_HERE
==/UserStyle== */`;


function buildStyles() {
  return gulp.src('**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(header(`${headerTemplate}\n\n`))
    .pipe(rename((path) => {
        path.dirname = "";
        path.basename = "toolbox-dark",
        path.extname = ".user.css"
    }))
    .pipe(gulp.dest('./dist'));
};

gulp.task('css', buildStyles);
