var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bs = require("browser-sync").create();

gulp.task('serve', ['scss'], function() {

    bs.init({
        server: "."
    });

    gulp.watch("scss/main.scss", ['scss']);
    gulp.watch("css/main.css").on('change', bs.reload);
});


gulp.task("scss", function () {
    //compile hashed css files
    gulp.src("scss/main.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer({
            browsers: ["last 20 versions"]
        }))
        .pipe(gulp.dest("css/"));
});

gulp.task("default", ["serve"]);