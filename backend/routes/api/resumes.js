const express = require("express");
const router = express.Router();

//resume model
const Resume = require('../../models/Resume');

// resume testing route
router.get("/test", (req, res) => res.json({ msg: "This is the resumes route" }));

//resume get route
router.get('/', function(req, res, next) {
  res.send('respond with a RESUME');
});

//resume upload route
router.post('/upload', (req, res) => {
  //check to see if correct file type:

  //if good, then create new Resume
  const newResume = new Resume({
    title: req.body.title,
    userId: req.body.userId, 
    file: req.body.file //how will this come in ? as a string?
  })

  newResume.save()
  .then(resume => res.json(resume))
  .catch(err => console.log(err));

})

module.exports = router;