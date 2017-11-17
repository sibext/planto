#!/bin/bash
set -e
echo Planto will be setup!

rake db:create db:migrate RAILS_ENV=production

echo Planto successfully configured!

exec "$@"