var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var del = require("del");

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('pug', function () {
    return gulp.src("./src/pug/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream());
});
gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

gulp.task("clean", () => {
    return del(["dist"]);
});

gulp.task("img", () => {
    return gulp.src("src/img/**/*.*")
        .pipe(gulp.dest("dist/img"));
});

gulp.task("fonts", () => {
    return gulp.src("src/fonts/**/*.*")
        .pipe(gulp.dest("dist/fonts"));
});
gulp.task("lib", () => {
    return gulp.src("src/lib/**/*.*")
        .pipe(gulp.dest("dist/lib"));
});


gulp.task(
    "build",
    gulp.series(
        "clean",
        gulp.parallel(
            "sass",
            "pug",
            "img",
            "fonts",
            "lib"
        )
    )
);

gulp.task('watchAll', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task("default", gulp.series(gulp.parallel("watchAll")));