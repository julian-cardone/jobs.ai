var express = require("express");
var router = express.Router();
const { googleAuth } = require("../config/keys");

/* GET home page. */
router.get("/google", function (req, res, next) {
  res.send({ google: googleAuth });
});

module.exports = router;
