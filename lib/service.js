var express = require('express');

module.exports = function(parent, options) {
    parent.all('/entity/:entity/*', exports.before);
    parent.get('/entity/:entity/list', exports.list);
    parent.put('/entity/:entity/update', exports.edit);

};

exports.before = function(req, res, next) {
    // Following headers are needed for CORS
    res.setHeader('access-control-allow-headers', 'X-Requested-With');
    res.setHeader("access-control-allow-origin", '*');

    if (req.method == "OPTIONS") {
        // In case of OPTIONS, return with no content   
        res.end();
    } else {
        next();
    }
}

exports.list = function(req, res, next) {
    res.json({
        dummy : req.param('entity')
    });
}

exports.edit = function(req, res, next) {

}
