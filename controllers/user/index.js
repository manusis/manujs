var pets = [];
pets.push({ name: 'Tobi', id: 0 });
pets.push({ name: 'Loki', id: 1 });
pets.push({ name: 'Jane', id: 2 });
pets.push({ name: 'Raul', id: 3 });
var users = [];
users.push({ name: 'TJ', pets: [pets[0], pets[1], pets[2]], id: 0  });
users.push({ name: 'Guillermo', pets: [pets[3]], id: 1 });
users.push({ name: 'Nathan', pets: [], id: 2 });

exports.before = function(req, res, next){
  var id = req.params.user_id;
  if (!id) return next();
  // pretend to query a database...
  process.nextTick(function(){
    req.user = users[id];
    // cant find that user
    if (!req.user) return next(new Error('User not found'));
    // found it, move on to the routes
    next();
  });
}

exports.list = function(req, res, next){
  res.render('list', { users: users });
};

exports.edit = function(req, res, next){
  res.render('edit', { user: req.user });
};

exports.show = function(req, res, next){
  res.render('show', { user: req.user });
};

exports.update = function(req, res, next){
  var body = req.body;
  req.user.name = body.user.name;
 // res.message('Information updated!');
  res.redirect('/user/' + req.user.id);
};
