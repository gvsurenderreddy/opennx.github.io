#!/bin/sh

chmod 755 commit.sh

chmod 644 index.html
chmod 644 favicon.ico
chmod 644 robots.txt
chmod 644 _config.yml
chmod 644 CNAME
chmod 644 README.md
chmod 644 .gitignore

chmod 755 _includes
chmod 644 _includes/*

chmod 755 _layouts
chmod 644 _layouts/*

chmod 755 radio
chmod 644 radio/*

find static -name '*.*' -print0 | xargs -0 chmod 644