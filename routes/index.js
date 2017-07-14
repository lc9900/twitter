const express = require('express');
const path = require('path');
const router = express.Router();

const tweetBank = require('../tweetBank');

module.exports = function(io){

	router.get('/', function (req, res) {
		let tweets = tweetBank.list();
		res.render( 'index', { tweets: tweets, showForm: true} );
	});

	router.post('/tweets', function(req, res) {
		var name = req.body.name;
		var text = req.body.text;
		tweetBank.add(name, text);
        var obj = {name: name, content: text};
        var singleTweet = tweetBank.find(obj);
        io.sockets.emit('newTweet', singleTweet[0]);
		// res.redirect('/');
	});

	router.get('/users/:name', function(req, res) {
		var name = req.params.name;
		var list = tweetBank.find( {name: name} );
		res.render( 'index', { tweets: list, showForm: true, userName: name } );

	});

	router.get('/tweets/:id', function(req, res) {
		var id = parseInt(req.params.id);
		var list = tweetBank.find( {id: id} );
		res.render( 'index', { tweets: list } );
	});

	return router
}
