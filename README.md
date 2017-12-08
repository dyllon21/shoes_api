# shoes_api

# Contents :

* How to start
* Cloning
* MongoDB
* Prerequisites
* License

# Information

- Display shoes from database without pressing the 'all shoes button'
- Display shoes in table format.
- Allow user to add new shoes (after clicking "Add new stock"), which will be available in table.
- Add as much shoes of your choice to be available in each category as well.
- Decrease amount available after "Purchase button" is clikced.

# How to start :

- create an express server for the app
- create a model (mongodb schema)
- create routes file and views folder
- create a public folder (css files)
- create a github repository and deploy
- deploy to heroku
- connect to mLab

# Cloning

- Go to the terminal on your machine and locate to the folder you created then copy and paste the following command :

$ git clone https://github.com/dyllon21/shoes_api.git shoes_api

What software do you need and how should you install it?

NodeJS
MongoDB
Package.json dependencies
Installing;

NodeJS

Before you try to install NodeJS open terminal and try to run it by typing, node -v. If NodeJS is installed it should tell you which version you have. Alternatively the command will fail and you will need to install it.

To install it on Ubuntu you can use the apt-get package manager.

Alternatively you can use nvm, the Node Version Manager to manage the version of NodeJS on your PC.

# Mongodb

How to Install MongoDB - only do Part 1.

Package.json dependencies

"dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "express-flash": "0.0.2",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.15.3",
    "mongoose": "^4.10.1"
  }

To install all dependencies required for the app to run, on the terminal navigate to the shoes_api_webapp folder, and type npm install .

Running the app locally

Open terminal and navigate to the shoes_api directory. Once you are located in the root folder, type:

  $ nodemon or
  $ node index.js

The following message should be displayed App listening on port 3000

Then open a new tab on your browser and type this http://localhost:3000 and the app will open.

Deployment

The app is deployed at Heroku and gitHub. The app also uses a MongoDB database hosted on mLab.

# Prerequisites

For this app you will need the following software and authentication:

- Node.js and npm installed.
- An existing Node.js app.
- A free Heroku account.
- The Heroku CLI (command line interface).
- Start your app locally using the heroku local command which is installed as part of the Heroku CLI.

$ heroku local web Your app should now be running on http://localhost:3005/.

The shoes api is deployed on Heroku

# License

- This project is licensed under the ISC-LICENSE.md file for details "license": "ISC"
