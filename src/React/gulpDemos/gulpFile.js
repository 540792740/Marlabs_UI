var gulp = require('gulp');
var rename = require('gulp-rename');

var styleSrc ='./src/scss/style.scss';
var styleDest ='./dist/css/';

gulp.task('style', function(){
    gulp.src(styleSrc)
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(styleDest));
        done()
});