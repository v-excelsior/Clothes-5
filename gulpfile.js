var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('sass', async function () {
  gulp.src('./src/css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());;
});

gulp.task('sass:watch', async function () {
  gulp.watch('./src/css/sass/*.scss', gulp.series('sass'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch('./src/css/sass/*.scss', gulp.series('sass'));
  gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task("default", gulp.series(gulp.parallel("browser-sync")));