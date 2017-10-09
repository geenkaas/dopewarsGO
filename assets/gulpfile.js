'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),

    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('copy', function() {
    var font_awesome_fonts = gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,woff2,eof,eot,svg}')
       .pipe(gulp.dest('./../dist/fonts'));
    var font_awesome_scss = gulp.src('./node_modules/font-awesome/scss/*.scss')
       .pipe(gulp.dest('./scss/vendor/font-awesome'));
    var html = gulp.src('./index.html')
       .pipe(gulp.dest('./../dist/'));
});

gulp.task('images', function() {
    gulp.src('./images/**/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('./../dist/images'))
});

var inputcss = './scss/*.scss';
var outputcss = './../dist/css';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
    return gulp
        .src(inputcss)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(outputcss))
        .pipe(browserSync.stream());
});

var inputjs = './js/**/*.js';
var outputjs = './../dist/js';

gulp.task('scripts', function(){
    return gulp.src(['./js/vendor/jquery.js', inputjs, '!**.min.js'])
        .pipe(concat('script.js'))
        .pipe(rename(function(path){
            path.extname = '.min.js';
         }))
        .pipe(gulp.dest(outputjs));
});

gulp.task('watch', function() {
    gulp.watch('**/*.scss', ['sass', 'scripts']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['copy', 'images', 'sass', 'scripts', 'watch']);