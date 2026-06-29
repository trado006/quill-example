var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/jade', function(req, res, next) {
  res.render("test/example.jade",{
        title:"Test Jade",
        message:"Hello Jade Template",
        users:[
            {name:"John"},
            {name:"Mary"}
        ]
    });
});

router.get('/ejs', function(req, res, next) {
  res.render('test/example.ejs', { name: 'EJS engine' });
});

router.get('/njk', function(req, res, next) {
  res.render('test/example.njk', { name: 'NJK engine' });
});

router.get('/quill', function(req, res, next) {
  res.render('test/quill.ejs', { name: 'EJS engine' });
});

router.get('/contenteditable', function(req, res, next) {
  res.render('test/contenteditable.ejs', { name: 'EJS engine' });
});


module.exports = router;
