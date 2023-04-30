const gulp = require ('gulp');
const sass = require ('gulp-sass') (require ('sass'));
const sourcemaps = require ('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');



function comprimeImagens () {
  return gulp
    .src ('./sources/images/*')
    .pipe(imagemin())
    .pipe (gulp.dest ('./build/images'));
}

function comprimeJavascript () {
  return gulp
    .src ('./sources/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe (gulp.dest ('./build/scripts'));
}

function compilaSass () {
  return gulp
    .src ('./sources/styles/main.scss')
    .pipe (sourcemaps.init ())
    .pipe (
      sass ({
        outputStyle: 'compressed',
      })
    )
    .pipe (sourcemaps.write ('./maps'))
    .pipe (gulp.dest ('./build/styles'));
}

exports.default = function () {
  gulp.watch (
    './sources/styles/*.scss',
    {
      ignoreInitial: false,
    },
    gulp.series (compilaSass)
  );
  gulp.watch (
    './sources/scripts/*.js',
    {
      ignoreInitial: false,
    },
    gulp.series (comprimeJavascript)
  );
  gulp.watch (
    './sources/images/*',
    {
      ignoreInitial: false,
    },
    gulp.series (comprimeImagens)
  );
};