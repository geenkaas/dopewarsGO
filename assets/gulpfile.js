'use strict';

// Project configuration
var project = 'dopewarsgo'; // Project name, used for build

/* Load plugins @todo css minify */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    newer = require('gulp-newer'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin');

/**
 * Browser Sync
 *
 * Asynchronous browser syncing of assets across multiple devices!! Watches for changes to js, image and php files
 * Doing this directly on the watch task, for example: watching php files with sync.reload. Will make the default / watch task really slow to start up.
 */
gulp.task('browser-sync', function () {
    var files = [
        '../**/*.html',
        './images/*.{png,jpg,gif,svg}'
    ];
    browserSync.init(files, {
        // Read here http://www.browsersync.io/docs/options/
        logPrefix: project,
        notify: false,
        injectChanges: true
    });
});

// Copy Files needed for production
gulp.task('duplicator', function() {

    var rootfolder = ['./firebase.json'];
    gulp.src(rootfolder)
        .pipe(newer('./'))
        .pipe(gulp.dest('./'));

    var fonts = [
        './node_modules/font-awesome/fonts/**/*.{ttf,woff,woff2,eof,eot,svg}',
        './fonts/**/*.{otf,ttf,woff,woff2,eof,eot}'
    ];
    gulp.src(fonts)
        .pipe(newer('./../dist/fonts/'))
        .pipe(gulp.dest('./../dist/fonts/'));

    var firebase = ['./node_modules/firebase/firebase.js'];
    gulp.src(firebase)
        .pipe(newer('./js/vendor/firebase'))
        .pipe(gulp.dest('./js/vendor/firebase'));

    var audio = ['./audio/**/*.{mp3,wav}'];
    gulp.src(audio)
        .pipe(newer('./../dist/audio/'))
        .pipe(gulp.dest('./../dist/audio/'));

    var normalize = ['./node_modules/normalize-scss/sass/**/*.scss'];
    gulp.src(normalize)
        .pipe(newer('./scss/vendor/normalize'))
        .pipe(gulp.dest('./scss/vendor/normalize'));

    var jquery = ['./node_modules/jquery/dist/jquery.js'];
    gulp.src(jquery)
        .pipe(newer('./js/vendor/jquery'))
        .pipe(gulp.dest('./js/vendor/jquery'));

    var jqueryMigrate = ['./node_modules/jquery-migrate/dist/jquery-migrate.js'];
    gulp.src(jqueryMigrate)
        .pipe(newer('./js/vendor/jquery-migrate'))
        .pipe(gulp.dest('./js/vendor/jquery-migrate'));

    var jquerymobile = ['./node_modules/jquery-mobile/js/jquery.mobile.js'];
    gulp.src(jquerymobile)
        .pipe(newer('./js/vendor/jquery-mobile'))
        .pipe(gulp.dest('./js/vendor/jquery-mobile'));

    var html = ['./index.html'];
    gulp.src(html)
        .pipe(newer('./../dist/'))
        .pipe(gulp.dest('./../dist/'));
});

// Compile sass to css
gulp.task('sass', function () {
    gulp.src('./scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false
        }))
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))

        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./../dist/css'))
        .pipe(reload({stream: true})) // Inject Styles when min style file is created
        .on('error', sass.logError)
        .pipe(notify({message: 'Sass task complete', onLast: true}));
});

// Concatenate/Minify Vendor scripts
gulp.task('js-vendor', function () {
    // add vendor scripts
    gulp.src([
            './js/vendor/jquery/jquery.js',
            './js/vendor/jquery-migrate/jquery-migrate.js',
            './js/vendor/jquery-mobile/jquery.mobile.js',
            './js/vendor/firebase/firebase.js'
        ])
        .pipe(plumber())
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest('./../dist/js/'))
        .pipe(notify({message: 'Vendor scripts task complete', onLast: true}));
});

// Minify custom scripts
gulp.task('js-custom', function () {
    gulp.src(['./js/**/*.js', '!./js/*.min.js', '!./js/vendor/**/*'])
        .pipe(plumber())
        .pipe(concat('script.js'))
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest('./../dist/js/'))
        .pipe(notify({message: 'Custom scripts task complete', onLast: true}));
});

// Task that ensures the `js-custom` task is complete before reloading browsers
gulp.task('js-watch', ['js-custom'], browserSync.reload);

// Optimize images
gulp.task('images', function () {
    gulp.src(['./images/**/*.{png,jpg,gif}'])
        .pipe(newer('./../dist/images/')) // Add the newer pipe to pass through newer images only
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({optimizationLevel: 7, progressive: true, interlaced: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./../dist/images/'))
        .pipe(notify({message: 'Images task complete', onLast: true}));
});

// Optimize svg
gulp.task('svg', function () {
    gulp.src(['./images/**/*.svg'])
        .pipe(newer('./../dist/images/')) // Add the newer pipe to pass through newer SVG's only
        .pipe(svgmin())
        .pipe(gulp.dest('./../dist/images/'))
        .pipe(notify({message: 'SVG task complete', onLast: true}));
});

// Watch task
gulp.task('default', ['duplicator', 'sass', 'js-vendor', 'js-custom', 'images', 'svg', 'browser-sync'], function () {
    gulp.watch('images/**/*.{png,jpg,gif}', ['images']);
    gulp.watch('images/**/*.svg', ['svg']);
    gulp.watch(['./**/*.html', './**/*.php'], ['duplicator']);
    gulp.watch(['scss/**/*.{scss, css}'], ['sass']);
    gulp.watch(['./js/**/*.js', './js/vendor/**/*.js', '!./js/**/*.min.js'], ['js-watch']);
});
