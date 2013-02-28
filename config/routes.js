var express = require('express');
var app = express();
var controllers = require('manu').controllers;

app.get("orders/:order_id/summary", controllers.orders.summary);


// Functionality to support resources
var resource = function(name) {
    app.get(name + "s", controllers[name].list);
    app.get(name + "/:" + name + "_id", controllers[name].show);
    app.put(name + "/:" + name + "_id", controllers[name].show);
    
}

for(var i in controllers) {
    resource(i);
}

