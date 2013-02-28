var express = require('express')
, path = require('path')
, fs = require('fs')


root = path.dirname(require.main.filename);

var exports = module.exports = initialize();
var controllers = exports.controllers = {};

exports.loadRoutes = function() {
    require(root + '/config/routes.js');
}
exports.loadControllers = function(app) {
    //controllers = {};
    verbose = 1;
    fs.readdirSync(root + '/controllers').forEach(function(name) {
        verbose && console.log('\n   %s:', name);
        
        var obj = require(root + '/controllers/' + name)
          , name = obj.name || name
          , prefix = obj.prefix || ''
          , app = express()
          , method
          , path;
          
        // allow specifying the view engine
        if (obj.engine) app.set('view engine', obj.engine);
        app.set('views', root + '/controllers/' + name + '/views');
        
        // before middleware support
        if (obj.before) {
          path = '/' + name + '/:' + name + '_id';
          app.all(path, obj.before);
          verbose && console.log('     ALL %s -> before', path);
          path = '/' + name + '/:' + name + '_id/*';
          app.all(path, obj.before);
          verbose && console.log('     ALL %s -> before', path);
        }
        controllers[name] = obj;

    });
}


function initialize() {
    if(!fs.existsSync(root + "/controllers")) {
        mkdir(root + "/controllers");
    }
    if(!fs.existsSync(root + "/controllers")) {
        mkdir(root + "/controllers");
    }    
    return this;
}