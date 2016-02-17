module.exports = {
	requireAuthentication: function(request, response, next){
		console.log('private meh!');
		next();
	},
	logger: function(request, response, next){
		console.log('Request[' + new Date().toString() + ']' + request.method + ' ' + request.originalUrl);
		next();
	}
};