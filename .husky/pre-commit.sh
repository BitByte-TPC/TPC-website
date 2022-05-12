#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Commiting..."
npm run frontend:lint
npm run server:lint
