var express = require('express'),
  routes = require('./app/routes'),
  api = require('./app/routes/api');
var logfmt = require("logfmt");
var bodyParser = require('body-parser');

var app = express();

app.use(logfmt.requestLogger());
app.use(bodyParser());
 
var port = Number(process.env.PORT || 5000);

app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);
app.use(express.static(__dirname + '/app'));

app.get('/', routes.index);
app.get('/views/:name', routes.partials);

app.get('/signin', routes.signin);
app.get('/signup', routes.signup);
app.get('/sitemap', routes.sitemap);
app.get('/contact', routes.contact);
app.get('/404', routes.page404);
app.get('/groups', routes.groups);
app.get('/teams', api.teams);
app.get('/teams/:TeamId', api.team);

//app.get('*', routes.index);

//app.get('/signin', function (req, res) { res.render('signin'); } );
//app.get('/signup', routes.signup);
//app.get('/teams', routes.teams);
//app.get('/teams/:TeamId', routes.teams);

//app.get('*', function(req, res) {
//  res.redirect('/#' + req.originalUrl);
//});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});

app.listen(port, function() {
  console.log("Listening on " + port);
});