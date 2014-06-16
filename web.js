var express = require("express");
var path = require('path');
var routes  = require('routes');
var logfmt = require("logfmt");
var bodyParser = require('body-parser');
var gzippo = require('gzippo');

var app = express();

app.use(logfmt.requestLogger());
app.use(bodyParser());
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
 
var port = Number(process.env.PORT || 5000);

app.get('/signin', routes.signin);
app.get('/signup', routes.signup);
app.get('/teams', routes.teams);
app.get('/teams/:TeamId', routes.teams);

app.listen(port, function() {
  console.log("Listening on " + port);
});