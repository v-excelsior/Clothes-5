var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
});

gulp.task('pug', function() {
    return gulp.src("./src/pug/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});


gulp.task('watchAll', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/sass/*.scss', gulp.series('sass'));
    gulp.watch('./src/pug/*.pug', gulp.series('pug'));
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task("default", gulp.series(gulp.parallel("watchAll")));