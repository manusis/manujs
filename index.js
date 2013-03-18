
var express = require('express');

var app = module.exports = express();

// settings

// map .renderFile to ".html" files
app.engine('html', require('ejs').renderFile);

// make ".html" the default
app.set('view engine', 'html');

// set views for error and 404 pages
app.set('views', __dirname + '/views');

// log
if (!module.parent) app.use(express.logger('dev'));

// serve static files
app.use(express.static(__dirname + '/public'));

// session support
app.use(express.cookieParser('some secret here'));
app.use(express.session());

// parse request bodies (req.body)
app.use(express.bodyParser());

// support _method (PUT in forms etc)
app.use(express.methodOverride());


// load controllers
require('./lib/boot')(app, { verbose: !module.parent });

require('./lib/service')(app);

// assume "not found" in the error msgs
// is a 404. this is somewhat silly, but
// valid, you can do whatever you like, set
// properties, use instanceof etc.
app.use(function(err, req, res, next){
  // treat as 404
  if (~err.message.indexOf('not found')) return next();

  // log it
  console.error(err.stack);

  // error page
  res.status(500).render('5xx');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){
  res.status(404).render('404', { url: req.originalUrl });
});

if (!module.parent) {
  app.listen(3000);
  console.log('\n  listening on port 3000\n');
}