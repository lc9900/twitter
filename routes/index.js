const express = require('express');
const path = require('path');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  var empty = '""'
  res.render( 'index', { tweets: tweets, showForm: true, userName: empty} );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
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


module.exports = router;