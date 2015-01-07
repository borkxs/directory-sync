# Directory Sync

## About

Uses a handful of small node tools to keep a master-slave directory sync relationship.

* fs-watch-tree: does a recurse fs.watch on a directory
* mkpath: for making every necessary folder in a path (i.e. `/foo/bar/baz/`)
* streams: read/write stream pipe for copying files

## Usage

Right now it only works if you have write access to the target directory. Initial setup should be copying the entire directory manually to the target location and ensuring that the directory is not read-only.

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

### Copying from Mac to Parallels

Mount your parallels harddrive on your mac and check for it's location in /Volumes.

```
ls /Volumes
```

## ToDo

* handle bringing the directory up to date after the script has been down for some time