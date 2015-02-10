var watcher = require('./watcher');

var config = {
	source: '/Users/emichaelson/some/directory',
	target: '/Users/emichaelson/other/directory',
	server: 'http://server',
	options: {
		exclude: ['node_modules', '~', '#', /^\./]
	}
}

watcher(config.source, config.target, config.options);