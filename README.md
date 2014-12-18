# Directory Sync

## About

Uses a handful of small node tools to keep a master-slave directory sync relationship.

* fs-watch-tree: does a recurse fs.watch on a directory
* mkpath: for making every necessary folder in a path (i.e. `/foo/bar/baz/`)
* streams: read/write stream pipe for copying files

## Usage

Right now it only works if you have write access to the files. This shouldn't be be a problem as

### Forever

You'll want to use forever:

`npm install -g forever`

Simplest uses:

`forever start script.js`
`forever stop script.js`
`forever stopall`

### Script Configuration

This part needs some work. Right now the `watcher.js` script has a config object where `source` and `target` can be specified.

`source` is given in two parts, the full directory path and the last portion of the path that is unnecessary. That's a confusing way to put it. 

If your first source argument is `/the/full/path/to/the/directory/thesefiles`, the second might be `directory/`.

### Copying from Mac to Parallels

Mount your parallels harddrive on your mac and check for it's location in /Volumes.

```
ls /Volumes
```

You can use this as your target directory.