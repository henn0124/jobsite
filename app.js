/*
 *	Jobsite
 *
 */

var port = 1337;
var http = require('http');
var stylus = require('stylus');
var express = require('express');
var expose = require('express-expose');
var app = module.exports = express.createServer();


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
	app.exposeRequire();
	app.exposeModule(__dirname + '/node_modules/underscore', 'underscore');
	app.exposeModule(__dirname + '/node_modules/backbone', 'backbone');
	app.exposeModule(__dirname + '/node_modules/jade', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(stylus.middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	serve();
});

app.configure('production', function(){
  app.use(express.errorHandler());
	port = 80;
	serve();
	process.setuid("jessetane");  // or server user
});


// Routes

app.get('/', function (req, res) {
	res.render('index', { 
		pageData:'Test string',
		layout: null 
	});
});

app.get('/map', function (req, res) {
	res.render('map', {
		layout: null
	});
});


// Functions

function serve () {
	app.listen(port);
	console.log("Express server listening on port %d in %s mode", port, app.settings.env);
}
