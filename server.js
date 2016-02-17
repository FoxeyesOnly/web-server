var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var portNumber = 3000;

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(request, response){
	response.send('About meh!');
});

app.use(express.static(__dirname + '/public'));


app.listen(portNumber, function(){
	console.log('Server started on port ' + portNumber + '.');
});