exports.index = function(req, res){
  res.render('../app/views/default.html');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('../app/views/' + name);
};

exports.signin = function(req, res){
  res.render('../app/views/users/signin.html');
};

exports.signup = function(req, res){
  res.render('../app/views/users/signup.html');
};