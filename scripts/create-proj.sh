#!/bin/bash

cd ..;
#yarn init;
#yarn add --dev eslint;
#yarn add --dev eslint-plugin-react babel-eslint;
#yarn add express ejs;
#yarn add pm2;

yarn add babel-cli babel-preset-react babel-preset-env babel-preset-stage-2

yarn dev;
yarn pm2 logs;
