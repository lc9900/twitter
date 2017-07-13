const express = require('express');
const path = require('path');
const router = express.Router();

const tweetBank = require('../tweetBank');

// router.get('/stylesheets/style.css', function(req, res, next){
// 	res.sendFile(path.join(__dirname +'/../public/stylesheets/style.css'))
// })

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;