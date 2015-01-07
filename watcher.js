var fs = require('fs'),
    path = require('path'),
    mkpath = require('mkpath'),
    copyFile = require('./copyfile'),
    watchTree = require('fs-watch-tree').watchTree;

function watcher(source, target, options) {
    watchTree(source, options, function(event) {
        var fname = path.basename(event.name),
            fpath = path.normalize(target + '/' + event.name.split(source)[1]);

        if (event.isDelete())
            remove(fpath);
        else
            copy(event.name, fpath); 
    });
}

function remove(filePath) {
    fs.unlink(fpath, function(err) {
        if (err) throw err;
        console.log('Deleted ' + fpath);
    });
}

function copy(source, target) {
    mkpath(path.dirname(source), function(err) { // make path if it doesn't exist
        if (err) throw err;
        copyFile(source, target, function(err) {
            if (err) throw err;
            console.log('Copied ' + source + ' to ' + target);
        });
    });
}

module.exports = watcher;