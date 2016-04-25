// Configuration

var express = require('express');
var app     = express();
var port    = (process.env.PORT || 3000);


// Set static files location

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/govuk'));
app.use(express.static(__dirname + '/views'));


// Start app

app.listen(port);
console.log('Listening on port ' + port);