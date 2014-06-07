var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

// Compiles Sass stylesheets
gulp.task('sass', function() {
  gulp.src('public/stylesheets/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('public/stylesheets/*.scss', ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass', 'watch']);
