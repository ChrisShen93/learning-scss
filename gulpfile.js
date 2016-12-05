

'use strict';

var gulp = require('gulp'),
    scss = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sourcemap = require('gulp-sourcemaps');

gulp.task('scss', function() {
    return gulp.src('./src/scss/**/*.scss')
            .pipe(autoprefix())
            .pipe(scss())
            .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-css', function() {
    return gulp.src('./dist/css/*.css')
            .pipe(sourcemap.init())
            .pipe(cleanCSS())
            .pipe(sourcemap.write())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('dist/css/mini'));
});

gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', ['scss']);
    gulp.watch('./dist/css/*.css', ['minify-css']);
});

gulp.task('default', ['scss', 'minify-css']);