#Phase 4 Project
This is my Phase 4 Project for Flatiron School's Software Engineering program. It is a simple full stack question and answer site running with a React frontend and a Rails backend. You can create a secure account to log in, then you can view a list of randomly generated seeded data in the form of questions and post comments(answers) on them. The commends may also be edited and/or deleted if they were posted from your account.

##Technologies
React
Material UI
React Router v6
Ruby on Rails
PostgreSQL

##Requirements
- Ruby 2.7.4+
- NodeJS(v16+) and npm
- Latest version of your preferred browser

##Usage
- [Fork](https://github.com/jaguilar89/queryzone-app) this repository and clone it to a local directory on your computer.
`$ git@github.com:jaguilar89/queryzone-app.git`

- `cd` into the repository and install the required gems for Ruby
  ` $ bundle install`

-  Migrate and seed the data
  `$ rails db:migrate db:seed`

- Start a local Rails server
  `rails s`

- Install any required React dependencies, then start up the app
  `$ npm install && npm start --prefix client`

- Create an account to view the site