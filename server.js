var express = require('express');
var app = express();
var portNumber = 3000;

var middleware = {
	requireAuthentication: function(request, response, next){
		console.log('private meh!');
		next();
	},
	logger: function(request, response, next){
		console.log('Request[' + new Date().toString() + ']' + request.method + ' ' + request.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(request, response){
	response.send('About meh!');
});

app.use(express.static(__dirname + '/public'));


app.listen(portNumber, function(){
	console.log('Server started on port ' + portNumber + '.');
});