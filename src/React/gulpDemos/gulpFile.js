var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');

var styleSrc ='./src/scss/style.scss';
var styleDest ='./dist/css/';

// gulp.task('style', function(done){
//     gulp.src(styleSrc)
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDest));
//         done();
// });

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
        .pipe(gulp.dest(styleDest));
    done();
});

var jsSRC = './src/js/script.js';
var jsDEST = './dist/js';

gulp.task('js',function(done){
    gulp.src(jsSRC)
        .pipe(gulp.dest(jsDEST));
    done();
})



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
    return;
});

gulp.task('default', gulp.parallel('style', 'js', 'image'),function(){});