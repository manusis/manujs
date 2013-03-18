var express = require('express');
i
module.exports = function(parent, options){
    parent.all('/entity/:entity/*', exports.before);
    parent.get('/entity/:entity/list', exports.list);
    parent.edit('/entity/:entity/update', exports.edit);
};

exports.before = function(req, res, next) {
    // var db = new mongodb;
   // req.collection = db[req.entity];
}

exports.list = function(req, res, next){
    // var records = req.collection.findAll();
    //res.json(records);
}


exports.edit = function(req, res, next){
    
    
}
