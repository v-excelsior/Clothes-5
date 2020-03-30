var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', async function () {
  gulp.src('./src/css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', async function () {
  gulp.watch('./src/css/sass/*.scss', gulp.series('sass'));
});

gulp.task("default", gulp.series(gulp.parallel("sass:watch")));