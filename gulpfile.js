var gulp = require('gulp'),
    deploy = require('gulp-gh-pages');

var onError = function (err) {
    console.log('An error occurred:', err.message);
    this.emit('end');
};

gulp.task('default', function () {
    gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(inject(gulp.src(['dist/js/**/*.js', 'dist/css/lib/*.css', 'dist/css/*.css'], {read: false}), {relative: true}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
        .pipe(deploy())
});