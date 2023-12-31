#!/usr/bin/env bash
# exit on error
set -o errexit

# builds the front end code
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

# builds the back end code
bundle install
RAILS_ENV=production rake db:reset DISABLE_DATABASE_ENVIRONMENT_CHECK=1
bundle exec rake db:migrate
bundle exec rake db:seed # if you have seed data, run this command for the initial deploy only
