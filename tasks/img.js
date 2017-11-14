module.exports = (gulp, plugins) => () => {
	gulp.src('app/img/**/*')
		.pipe(plugins.imagemin([
			plugins.imagemin.gifsicle({interlaced: true}),
			plugins.imageminMozjpeg({
				progressive: true
			}),
			plugins.imagemin.svgo({plugins: [{removeViewBox: true}]}),
			plugins.imageminPngquant({speed: 5})
		], {
			verbose: true
		}))
		.pipe(gulp.dest('dist/img'));
};