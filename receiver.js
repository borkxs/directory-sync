var fs = require('fs'),
    http = require('http'),
    path = require('path'),
    moment = require('moment'),
    mkpath = require('mkpath');

var server = http.createServer(function (req, res) {

    if ( req.method == 'PUT' )
        copyFile( req, res );
    else if ( req.method == 'DELETE' )
        deleteFile( req, res );
});
server.listen(8080);

function copyFile ( req, res ) {

    mkpath( path.dirname( req.headers.target ), function ( err ) {
        if (err)
            log( res, msg );
        else
            writeFile( req, res );
    });
}

function writeFile ( req, res ) {
    var source = req.headers.source,
        target = req.headers.target,
        wr = fs.createWriteStream( target, {});
    
    wr.on('error', function(err) {
        log( res, err );
    });
    wr.on('close', function(ex) {
        log( res,'Copied ' + source + ' to ' + target );
    });

    req.pipe(wr);
}

function deleteFile ( req, res ) {
    var target = req.headers.target;

    fs.unlink( target, function(err) {
        if (err)
            log( res, err );
        else
            log( res, 'Deleted ' + target );
    });
}

function log( res, str ) {
    var date = moment().format(),
        msg = date + ': ' + str;
    console.log( msg );
    res.end( msg );
}