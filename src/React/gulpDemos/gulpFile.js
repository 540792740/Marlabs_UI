var gulp = require('gulp');
var rename = require('gulp-rename');

var styleSrc ='./src/scss/style.css';
var styleDest ='./dist/css/';

gulp.task('style', function(done){
    gulp.src(styleSrc)
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(styleDest));
        done();
});