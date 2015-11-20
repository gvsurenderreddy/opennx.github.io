#!/bin/bash

echo **********************
echo   FIXING PERMISSIONS
echo **********************

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

find $DIR/ -type d -exec chmod 775 {} +
find $DIR/ -type f -exec chmod 664 {} +

chmod 644 index.html
chmod 644 favicon.ico
chmod 644 robots.txt
chmod 644 _config.yml
chmod 644 CNAME
chmod 644 README.md
chmod 644 .gitignore

chmod 755 fix_permissions.sh 

