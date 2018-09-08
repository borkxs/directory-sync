# Directory Sync

## About

Uses a handful of small node tools to keep a directory sync relationship.

* fs-watch-tree: does a recurse fs.watch on a directory
* mkpath: for making every necessary folder in a path (i.e. `/foo/bar/baz/`)
* streams: read/write stream pipe for copying files

## Usage

Recommend using rsync or something similar to bring the entire directory up to date, then directory-sync for watching your individual file saves.

You should only need one instance of receiver.js running. For now, each directory will need to have watcher.js running in it.

Receiver can be on any machine that you have http access to.

### Forever

You'll want to use forever:

`npm install -g forever`

Simplest uses:

```
forever start script.js
forever stop script.js
forever stopall
```

### Script Configuration

The watch.js file is simply used to define a configuration object (just for readability) which calls the `watcher` module.
