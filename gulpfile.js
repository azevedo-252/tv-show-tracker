var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
// Perf Optimization modules
// var csso = require('gulp-csso');
// var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');
// var templateCache = require('gulp-angular-templatecache');
// var uncss = require('gulp-uncss');

// Compiles Sass stylesheets
gulp.task('sass', function() {
  gulp.src('public/stylesheets/style.scss')
    .pipe(plumber())
    .pipe(sass())
    // .pipe(uncss({
    //   html: [
    //     'public/index.html',
    //     'public/views/add.html',
    //     'public/views/detail.html',
    //     'public/views/home.html',
    //     'public/views/login.html',
    //     'public/views/signup.html'
    //   ]
    // }))
    // .pipe(csso())
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('compress', function() {
  gulp.src([
    'public/vendor/angular.js',
    'public/vendor/*.js',
    'public/app.js',
    'public/services/*.js',
    'public/controllers/*.js',
    'public/filters/*.js',
    'public/directives/*.js'
  ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('templates', function() {
  gulp.src('public/views/**/*.html')
    .pipe(templateCache({ root: 'views', module: 'MyApp' }))
    .pipe(gulp.dest('public'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('public/stylesheets/*.scss', ['sass']);
  gulp.watch(['public/**/.js', '!public/app.min.js', '!public/vendor'], ['compress']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass', 'watch']);
// gulp.task('default', ['sass', 'compress', 'templates', 'watch']);
