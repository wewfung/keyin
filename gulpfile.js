var gulp = require("gulp");

var babel = require("gulp-babel");
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync').create();

gulp.task("build-js", function() {
    browserify(["./public/js/index.js"])
      .transform("babelify", {presets: ["es2015"]})
      .bundle()
      .pipe(fs.createWriteStream("./public/js/bundle.js"));
});

gulp.task("watch", function() {
    gulp.watch("public/**/*.js", ["build-js"]);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:3000"
    });
});
