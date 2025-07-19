#!/usr/bin/bash

rsync -avz \
  -e "ssh -i '/d/devops-projects/Static-Site-Server/weather-application/devops.pem'" \
  ./ \
  ec2-user@13.239.119.14:/var/www/weather-app

