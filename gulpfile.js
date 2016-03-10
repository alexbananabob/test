var gulp = require('gulp'),
    deploy = require('gulp-gh-pages');

var onError = function (err) {
    console.log('An error occurred:', err.message);
    this.emit('end');
};

gulp.task('default', function () {
    gulp.src('images/**/*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
        .pipe(deploy())
});