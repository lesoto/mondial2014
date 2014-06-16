var express = require("express");
var logfmt = require("logfmt");
var bodyParser = require('body-parser');

var app = express();

app.use(logfmt.requestLogger());
app.use(bodyParser());
 
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});