const express = require("express");
const router = express.Router();

// resume testing route
router.get("/test", (req, res) => res.json({ msg: "This is the resumes route" }));

//resume get route
router.get('/', function(req, res, next) {
  res.send('respond with a RESUME');
});

module.exports = router;