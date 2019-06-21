// This gulpfile watches for changes and runs browsersync
// Steps:
// 01. Move this gulpfile to theme folder
// 02. Run 'npm init' and press enter on all questions
// 03. Run 'npm install gulp gulp-sass gulp-autoprefixer gulp-sourcemaps browser-sync --save-dev'
// 04. Change proxy URL in this gulpfile
// 05. Run 'gulp'. Sass gets built automatically

// Include necessary modules
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

// Set autoprefixer options
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%']
};

// Configure BrowserSync
gulp.task('browser-sync', function() {
  var files = [
    './style.css',
    './**/*.php'
  ];
  
  // Initialize BrowserSync with a PHP server
  browserSync.init(files, {
    proxy: "http://localhost:8888/iederkindveilig-wp"
  });
});

// Configure Sass task to run when the specified .scss files change
// BrowserSync will also reload browsers
gulp.task('sass', function() {
  return gulp.src('sass/*.scss')
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(sass({
    'outputStyle': 'compressed'
  }))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());
});

// Create the default task that can be called using 'gulp'
// The task will process sass, run browser-sync and start watching for changes
gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch("sass/**/*.scss", ['sass']);
  gulp.watch("sass/**/*.sass", ['sass']);
})