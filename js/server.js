var args = process.argv.splice(2)[0];
var express = require('express');
var app = express();
var argsjson =JSON.parse(args); 
var projects = argsjson.projects;
var port = argsjson.port;

projects.forEach(function (value,index,array) {
	app.use('/'+encodeURI(value.name),express.static(value.path+''));
});

app.get('*', function(req, res){
    res.sendFile( __dirname + "/" + "404.html" );
});

var server = app.listen(port, function () {
	console.log('server start at '+port);
})