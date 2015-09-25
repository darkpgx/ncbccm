var express = require('express');
var router = express.Router();

router.get('/data', function(req, res){
  return res.json([{
    id: 0,
    name: 'song zheng'
  }, {
    id: 1,
    name: 'fong chin'
  }]);
});

router.get('/*', function(req, res){
  res.render('index', {});
});

module.exports = router;
