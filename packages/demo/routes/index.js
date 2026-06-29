var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World');
});

const userRoute = require("./users.route");
const testRoute = require("./test.route");

router.use("/users", userRoute);
router.use("/test", testRoute);

module.exports = router;
