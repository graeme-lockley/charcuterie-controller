#!/bin/bash

cd /home/pi/webapp/app

sudo sh -c 'echo > /var/log/webapp.log'
sudo chown pi /var/log/webapp.log

ruby lib/webapp.rb > /var/log/webapp.log 2>&1

