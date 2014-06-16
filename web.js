var express = require("express");
var logfmt = require("logfmt");
var bodyParser = require('body-parser');
var gzippo = require('gzippo');

var app = express();

app.use(logfmt.requestLogger());
app.use(bodyParser());
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
 
var port = Number(process.env.PORT || 5000);

app.get('/signin', function (req, res) { res.render('signin'); } );
//app.get('/signup', routes.signup);
//app.get('/teams', routes.teams);
//app.get('/teams/:TeamId', routes.teams);

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});

app.listen(port, function() {
  console.log("Listening on " + port);
});