var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');



router.get('/', function (request, response, next) {
	var tweets = tweetBank.list();
	response.render('index', { title: 'Twitter.js', tweets: tweets });
});


router.get('/users/:name', function(req, res, next) {
	var name = req.params.name;
	var tweets = tweetBank.find( { name: name });
	res.render('index', { title: name + "'s Tweets", tweets: tweets })
});


router.get('/tweets/:id', function(req, res, next) {
	var tweetID = req.params.id;
	var tweet = tweetBank.find({ id: +tweetID });
	console.log(tweet);
	console.log(tweetID);
	res.render('index', { title: tweet.name, tweets: tweet })
});




// router.get('/stylesheets/style.css', function(req, res, next) {
// 	res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
// });


module.exports = router;

