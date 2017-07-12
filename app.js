const express = require( 'express' );
const app = express();

app.listen(3000, function(){
	console.log("server listening")
})

app.use(function(req, res, next){
	console.log(req.method, req.originalUrl)
})

app.get('/', function(req, res, next){
	res.send('Hey!')
})

