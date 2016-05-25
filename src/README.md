Online Plea
===========


## What is it?

Online Plea is a prototype for this service incorporating GOV.UK elements.

The app can be seen here: [http://onlineplea.herokuapp.com](http://onlineplea.herokuapp.com)


## Running this app locally

If you wish to run this app locally you will need [Node.js](https://nodejs.org/)


Clone this repository

    git clone https://github.com/trevorsaint/online-plea.git


Install the required node modules

    npm install

    bower install


It's time to use Gulp tasks:

- `$ gulp` to build an optimized version of your application in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode
- `$ gulp protractor` to launch your e2e tests with Protractor
- `$ gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
