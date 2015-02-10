var fs = require('fs'),
    path = require('path'),
    mkpath = require('mkpath'),
    request = require('request'),
    watchTree = require('fs-watch-tree').watchTree;

function watcher( source, target, server, options ) {
    watchTree(source, options, function(event) {
        var fname = path.basename(event.name),
            fpath = path.normalize(target + '/' + event.name.split(source)[1]);

        if (event.isDelete())
            remove(fpath, server);
        else
            copy(event.name, fpath, server);
    });
}

function remove( filePath, receiver ) {
    request({ method: 'DELETE', uri: receiver, headers: { target: filePath }}, log);
}

function copy( source, target, receiver ) {

    fs.lstat( source, function  (err, stats) {
        if ( err ) throw err;
        if ( stats.isFile() ) {
            console.log('sending', source);
            fs.createReadStream( source ).pipe( request({
                method: 'PUT', 
                uri: receiver, 
                headers: { source: source, target: target } // should look up best practices for headers
            }, log));
        }
    });
}

function log ( err, res ) {
    if ( err )
        console.log( err );
    else
        console.log( res.body );
}

module.exports = watcher;