var gulp = require ('gulp'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    htmlmin = require('gulp-htmlmin');

gulp.task ('default', function(){
  gulp.src('src/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});
gulp.task ('cssmin', function(){
  gulp.src('src/**/*.css')
  .pipe(cssnano())
  .pipe(gulp.dest('dist'));
});
gulp.task('htmlmin', function(){
  gulp.src('src/**/*.html')
  .pipe(htmlmin())
  .pipe(gulp.dest('dist'));
});
