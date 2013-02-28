

exports.before = function(req, res, next){
console.log("before");
}

exports.list = function(req, res, next){
console.log("list");
console.log(req);

};

exports.edit = function(req, res, next){
console.log("edit");
console.log(req);
};

exports.show = function(req, res, next){
console.log("show");
console.log(req);
};

exports.update = function(req, res, next){
console.log("update");
console.log(req);
};
