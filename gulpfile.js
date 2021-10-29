'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var header = require('gulp-header');

const headerTemplate = `/* ==UserStyle==
@name           reddit toolbox dark userstyle
@namespace      https://github.com/dequeues/Reddit-Toolbox-Dark-Userstyle
@version        1.0.0
@description    Dark mode for reddit toolbox on new reddit
@author         dequeues
@supportURL     https://github.com/dequeues/Reddit-Toolbox-Dark-Userstyle/issues
@updateURL      https://gist.githubusercontent.com/dequeues/d8a6f21637da75fe2bbd057ac2d2a3e7/raw/ec0b768f83ebfdfbd38040dc87a2bfe27641d89d/lmao.user.css
==/UserStyle== */`;


function buildStyles() {
  return gulp.src('**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(header(`${headerTemplate}\n\n`))
    .pipe(gulp.dest('./dist'));
};

gulp.task('css', buildStyles);
