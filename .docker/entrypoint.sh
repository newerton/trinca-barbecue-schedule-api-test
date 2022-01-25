#!/bin/bash

#On error no such file entrypoint.sh, execute in terminal - dos2unix .docker\entrypoint.sh

### BACK-END ###
cd /home/node/app/
if [ ! -f ".env" ]; then
    cp .env.example .env
fi

if [ ! -f ".env.testing" ]; then
    cp .env.testing.example .env.testing
fi
