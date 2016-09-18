var gulp = require("gulp");

var babel = require("gulp-babel");
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task("build-js", function() {
    browserify(["./public/js/index.js"])
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(fs.createWriteStream("./public/js/bundle.js"));
});

gulp.task("watch", function() {
    gulp.watch("public/**/*.js", ["build-js"]);
});

gulp.task('heroku:prod', function() {
    browserify(["./public/js/index.js"])
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(fs.createWriteStream("./public/js/bundle.js"));
});

