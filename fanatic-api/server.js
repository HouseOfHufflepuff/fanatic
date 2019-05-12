var hapi = require('hapi');
var joi = require("joi");
var port = process.env.PORT || 3030;
var mongoose = require('mongoose');
mongoose.set('debug', true);

var fanaticStore = require('./utils/database.js');
mongoose.connect(fanaticStore.url);

var serverCfg = require('./configs/serverCfg');
var server = hapi.createServer('localhost', port, serverCfg);

//Routes
var routes = require('./routes');
server.route(routes);

server.start();
console.log('Fanatic-API Server started on port ' + port);