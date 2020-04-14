var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

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
        .pipe(sass({
            errLogTooConsole:true
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers:['last 2 versions'],
            cascade:false,
        }))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(styleDest));
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