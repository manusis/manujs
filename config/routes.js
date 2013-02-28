var express = require('express');
var manu = require('manu');
var app = express();
var controllers = manu.controllers;

//app.get("orders/:order_id/summary", controllers.orders.summary);
console.log(app);

for(var i in controllers) {
    manu.resource(i);
}
console.log(app.routes);
