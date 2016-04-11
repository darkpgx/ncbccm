var express = require('express');
var router = express.Router();
var bible_api_key = process.env.bible_api_key || "somekey";
var request = require('request');
var books = require('./books').books;

router.get('/data', function(req, res){
  return res.json([{
    id: 0,
    name: 'song zheng'
  }, {
    id: 1,
    name: 'fong chin'
  }]);
});

router.get('/verses', function(req, res){
  var book = req.query.verses.split(' ')[0];
  if(book.length < 2) book = req.query.verses.split(' ')[0]+' '+req.query.verses.split(' ')[1];
  for(var i=0; i < books.length; i++){
    if(book==books[i].name){
      book = books[i].abbr;
      break;
    }
  };
  console.log(book);
  var chapter = req.query.verses.split(' ')[1].split(':')[0];
  if(req.query.verses.split(' ')[0].length<2) chapter = req.query.verses.split(' ')[2].split(':')[0];
  var options = {
    url: 'https://bibles.org/v2/chapters/eng-ESV:'+book+'.'+chapter+'.js',
    method: 'GET',
    'auth': {
      'user': bible_api_key,
      'pass': 'X'
    }
  };
  console.log(options.url);
  request(options, function(error, response, body){
    if(error) return res.json(error);
    var body = JSON.parse(body);
    var text = body.response.chapters[0].text;
    return res.json({
      text
    });
  });
});

router.get('/*', function(req, res){
  res.render('index', {});
});

module.exports = router;
