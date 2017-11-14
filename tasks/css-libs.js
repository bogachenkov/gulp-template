module.exports = (gulp, plugins) => () => {
	gulp.src('src/css/libs.css')
		.pipe(plugins.csso())
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(gulp.dest('src/css'));
};