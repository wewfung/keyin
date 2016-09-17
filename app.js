'use strict';

var fs = require('fs');
var express = require('express');
var http = require('http').Server(app);
var app = express();

var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
  return gulp.src("public/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

app.use(express.static('public'));

app.listen(3000, function() {
    console.log("Farting on port 3000");
});
