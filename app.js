const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.listen(3000, function(){
	console.log("server listening")
})

app.use('/', routes);

var example_dict =  {title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]}



app.use(function(req, res, next){
	console.log(req.method, req.originalUrl)
	next()
})



