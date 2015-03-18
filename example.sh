#!/bin/sh

declare -a directories=("some_directory1" "some_directory2" "some_directory3")

for i in "${directories[@]}"
do
    echo Updating directory $i...
    /usr/local/bin/rsync -a --no-o --no-p --delete --exclude-from /Users/emichaelson/Code/trunk.professional_services/exclude.txt /Users/emichaelson/Code/trunk.professional_services/$i/ /Volumes/C/Users/emichaelson/sync/$i
done

forever start /Users/emichaelson/Code/trunk.professional_services/directory-sync/watch.js ${directories[@]}