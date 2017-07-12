const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


var example_dict =  {title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]}

app.listen(3000, function(){
	console.log("server listening")
})

app.use(function(req, res, next){
	console.log(req.method, req.originalUrl)
	next()
})

app.get('/', function(req, res, next){
	// res.send('Hey')
	res.render('index.html', example_dict);

})

