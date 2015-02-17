var watcher = require('./watcher'),

    server = 'http://server',

    options = { exclude: [ '.git', '.idea', 'node_modules', '~', '#', /^\./ ] },

    directories = process.argv.slice(2);

directories.forEach( function ( dir ) {
    var source = '/Users/emichaelson/source/' + dir,
        target = '/Users/emichaelson/target/' + dir;

    watcher(source, target, server, options);
});