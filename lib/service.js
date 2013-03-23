var express = require('express');

module.exports = function(parent, options) {
	parent.all('/entity/:entity/*', exports.before);
	parent.get('/entity/:entity/list', exports.list);
	parent.post('/entity/:entity/create', exports.create);
	parent.put('/entity/:entity/update', exports.edit);

};

exports.before = function(req, res, next) {
	
	// Following headers are needed for CORS
	res.setHeader('access-control-allow-headers', 'X-Requested-With');
	res.setHeader("access-control-allow-origin", '*');

	//console.log('request parameter : ', req.params.entity);
	
	var dburl = "mongodb://barton1:barton1@ds051447.mongolab.com:51447/manu1";

	var collections = ["entities"];
	// name of collection

	var db = require("mongojs").connect(dburl, collections);

	/*db.entities.save({
	 name : "products",
	 }, function(err, saved) {
	 if (err || !saved)
	 console.log("entity not saved");
	 else
	 console.log("entity saved");
	 });*/

	db.entities.find({
		name : "products"
	}, function(err, entities) {
		if (err || !entities)
			console.log("No entity found");
		else
			entities.forEach(function(entity) {
				console.log(entity);
			});
	});
	
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
