var gulp       = require('gulp');
var concat     = require('gulp-concat');
var ts         = require('gulp-typescript');
var browserify = require('gulp-browserify');

var tsConfig = ts.createProject('tsconfig.json');

gulp.task('build', ['copy-index',
                    'build-ts',
                    'build-mousetrap']);

gulp.task('build-ts', function() {
    var tsResult = tsConfig.src()
                           .pipe(ts(tsConfig));

    return tsResult.js
                   .pipe(browserify())
                   .pipe(gulp.dest('./.build/'));
});

gulp.task('build-mousetrap', function() {

    return gulp.src('./node_modules/mousetrap/mousetrap.js')
               .pipe(browserify())
               .pipe(gulp.dest('./.build/'));
});

gulp.task('copy-index', function() {
  return gulp
           .src('./index.html')
           .pipe(gulp.dest('./.build/'));

});
