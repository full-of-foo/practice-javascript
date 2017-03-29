#!/bin/bash
set -e


if [ "$1" = 'app' ]; then
    exec ./node_modules/.bin/babel-node index.js $2
fi

exec "$@"
