module.exports = (gulp, plugins) => () => {
	gulp.src('app/libs/**/*.js')
		.pipe(plugins.concat('libs.min.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('app/js'));
};