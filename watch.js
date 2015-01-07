var watcher = require('./watcher');

var config = {
	source: '/Users/erikmichaelson/Code/js/directory-sync/test1',
	target: '/Users/erikmichaelson/Code/js/directory-sync/test2',
	options: {
		exclude: ['node_modules', '~', '#', /^\./]
	}
}

watcher(config.source, config.target, config.options);