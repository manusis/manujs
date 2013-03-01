

exports.before = function(req, res, next){
res.send();

}

exports.list = function(req, res, next){
console.log("here");
res.render("list", {});
};

exports.edit = function(req, res, next){
res.send("this is edit action in dummies");
};

exports.show = function(req, res, next){
res.send(req.params);
res.send("this is show action in dummies");

};

exports.update = function(req, res, next){
console.log("update");
console.log(req);
res.send();

};
