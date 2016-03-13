var express = require('express');
var app = express();
var chalk = require('chalk');
var morgan = require('morgan');
var logger = morgan('dev');
var swig = require('swig');
var routes = require('./routes/');
var fs = require('fs');
var path = require('path');
var mime = require('mime');


app.set('views', __dirname + '/views');  // where to find the views
app.set('view engine', 'html');  // what file extension our templates have
app.engine('html', swig.renderFile);  // how to render html templates
swig.setDefaults({ cache: false});


app.use(logger);  // using morgan invoked with 'dev' (in vars list) as middlware to log status,etc.

// the typical way to use express static middleware \/
app.use(express.static(__dirname + '/public'));

//        ^ same as \/

// // manually-written static file middleware
// app.use(function(req, res, next) {
// 	var mimeType = mime.lookup(req.path);
// 	fs.readFile('./public' + req.path, function(err, fileBuffer){
// 		if (err) return next();
// 		res.header('Content-Type', mimeType);
// 		res.send(fileBuffer);
// 	});
// });



app.use('/', routes);  // use route handlers in the index.js module (in routes folder - automatically goes to index.js in routes folder cuz called 'index')



app.listen(3000, function() {
	console.log('Listening on port 3000...');
});

























// var locals = {
// 	title: 'An Example',
// 	people: [
// 		{name: 'Gandalf'},
// 		{name: 'Frodo'},
// 		{name: 'Hermione'},
// 	]
// };

// swig.renderFile(__dirname + '/views/index.html', locals, function(err, data) {
// 	if (err) return console.error(err);
// 	console.log(data);
// });