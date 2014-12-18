var fs = require('fs'),
    path = require('path'),
    mkpath = require('mkpath'),
    copyFile = require('./copyfile'),
    watchTree = require('fs-watch-tree').watchTree;

var config = {
    source: [
        '/Users/username/directory/directory-to-watch',
        'directory/'
        ],
    target: '/Volumes/C/Users/username/target/',
    options: {
        exclude: ['node_modules', '~', '#', /^\./]
    }
}

watchTree(config.source[0], config.options, function(event) {

    var fname = event.name.split( config.source[1] )[1],
        fpath = config.target + fname,
        fdir = path.dirname(fpath);

    if ( event.isDelete() )
        fs.unlink(fpath, function (err) {
          if (err) throw err;
          console.log('Deleted ' + fpath);
        });
    else
        mkpath(fdir, function(err) { // make path if it doesn't exist
            if (err) throw err;

            copyFile(event.name, fpath, function(err) {
                if (err) throw err;
                console.log('Updated ' + fpath);
            });

        });

});