const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('views', {express: app});

app.listen(3000, function(){
	console.log("server listening")
})

app.use(function(req, res, next){
	console.log(req.method, req.originalUrl)
	next()
})

app.get('/', function(req, res, next){
	res.send('Hey!')
})

