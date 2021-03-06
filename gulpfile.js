var gulp = require('gulp'),
    deploy = require('gulp-gh-pages'),
    deployOptions = {
	remoteUrl: "https://github.com/alexbananabob/test.git",
	origin: "origin",
	branch: "gh-pages",
	cacheDir: ".publish",
	push: "true",
	forse: "true"
    };

var onError = function (err) {
    console.log('An error occurred:', err.message);
    this.emit('end');
};

gulp.task('default', function () {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('deploy', ['default'], function () {
    return gulp.src("./dist/**/*")
        .pipe(deploy(deployOptions))
});