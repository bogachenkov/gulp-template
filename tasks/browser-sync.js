module.exports = (gulp, plugins) => () => {
	plugins.browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	})
}