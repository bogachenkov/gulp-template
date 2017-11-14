const gulp = require('gulp'),
	browserSync = require('browser-sync'),
	plugins = require('gulp-load-plugins')({
		camelize: true,
		lazy: false,
		pattern: ['*']
	});

function getTask(task) {
	return require('./tasks/' + task)(gulp, plugins);
}

gulp.task('css-libs', getTask('css-libs'));
gulp.task('js-libs', getTask('js-libs'));
gulp.task('sass', getTask('sass'));
gulp.task('img', getTask('img'));
gulp.task('browser-sync', getTask('browser-sync'));
gulp.task('clean', () =>  plugins.del.sync('dist'));
gulp.task('clear', (callback) => plugins.cache.clearAll());
gulp.task('default', ['watch']);

gulp.task('watch', ['browser-sync', 'css-libs', 'js-libs'], () => {
    gulp.watch('app/sass/**/*.scss', {interval: 5000}, ['sass']);
    gulp.watch('app/*.html', {interval: 5000}, browserSync.reload);
    gulp.watch('app/js/**/*.js', {interval: 5000}, browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'js-libs'], () => {
    let buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css'
    ])
    .pipe(plugins.csso())
    .pipe(gulp.dest('dist/css'));

    let buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

    let buildJS = gulp.src('app/js/**/*')
    .pipe(plugins.babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('dist/js'));

    let buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});