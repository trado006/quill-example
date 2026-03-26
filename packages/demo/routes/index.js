var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index.jade', { title: 'Express' });
  // res.render('index.ejs', { name: 'Express' });
  res.render('index.njk', {
    name: 'Tra'
  });
});

module.exports = router;
