var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var styleSrc ='./src/scss/style.scss';
var styleDest ='./dist/css/';

var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');

var svgSrc = './src/images/*.svg';
var svgDest = './dist/images/*.svg';

gulp.task('icon-generator', function(done){
    return gulp.src(svgSrc)
        .pipe(svgmin())
        .pipe(svgstore({inlineSvg:true}))
        .pipe(rename('icon.svg'))
        .pipe(gulp.dest(svgDest));
    done()
});

gulp.task('style', function(done){
    gulp.src(styleSrc)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogTooConsole:true
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers:['last 2 versions'],
            cascade:false,
        }))
        .pipe(rename({suffix:'.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDest))
        .pipe(browserSync.reload({
        stream:true
    }));
    done();
});
gulp.task('browserSync', function () {
    browserSync.init({
        server:{
            baseDir:'../gulpDemos'
        }
    })
});

var jsSRC = './src/js/script.js';
var jsDEST = './dist/js';

gulp.task('js',function(done){
    gulp.src(jsSRC)
        .pipe(gulp.dest(jsDEST));
    done();
});



var imgSRC = "./src/images/*";
var imgDEST = './dist/images/';

gulp.task('image', function (done) {
    gulp.src(imgSRC)
        .pipe(imagemin())
        .pipe(gulp.dest(imgDEST));
    done();
});

// Listener
var styleWatch = './src/scss/**/*.scss';
var jsWatch = './src/js/**/*.js';
gulp.task('watch', function () {
    gulp.watch(styleWatch, gulp.series('style'));
    gulp.watch(jsWatch, gulp.series('js'));
    // return
});

gulp.task('default', gulp.parallel('style', 'js', 'image', 'watch','browserSync'),function(){});