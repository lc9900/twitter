const express = require( 'express' );
const path = require('path');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const routes = require('./routes');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.listen(3000, function(){
	console.log("server listening")
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', routes);
app.use('/', express.static(path.join(__dirname, 'public')));

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



