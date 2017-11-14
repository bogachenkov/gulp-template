module.exports = (gulp, plugins) => () => {
	gulp.src('app/sass/**/*.scss')
		.pipe(plugins.sass().on('error', (error) => {
			return console.log(error);
		}))
		.pipe(plugins.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/css'))
		.pipe(plugins.browserSync.reload({stream:true}))
};