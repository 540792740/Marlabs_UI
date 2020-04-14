var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

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
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(styleDest));
    done();
});