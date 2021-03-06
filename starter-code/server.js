'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file

// DONE: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.get('*', function(request, response) {
  // DONE: Using the response object, send the index.html file back to the user
  console.log('Scott What is up you?');
  response.sendFile('public/index.html', {root: '.'});
});

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.use(function(request, response){
  response.sendFlile('public/new.html', {root: '.'});
});
app.listen(PORT, function() {
  // TODO: Log to the console a message that lets you know which port your server has started on
  console.log(`your app in on localhost:${PORT}`);
});
