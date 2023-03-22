const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//resume model
const Resume = require('../../models/Resume');
//resume validtor
// const validateResumeInput = require('../../validation/resumes');

//ROUTES:
//resume get all route
router.get('/', function(req, res, next) {
  Resume.find()
    .sort({ date: -1 })
    .then(resumes => res.json(resumes))
    .catch(err => res.status(404).json({ noresumesfound: 'No resumes found' }));
});

//resume get all from user route
router.get('/resume/:userId', (req, res) => {
  Resume.find({userId: req.params.userId})
      .sort({ date: -1 })
      .then(resumes => res.json(resumes))
      .catch(err =>
          res.status(404).json({ noresumesfound: 'No resumes found from that user' }
      )
  );
});

//get resume with certain id
router.get('/:id', (req, res) => {
  Resume.findById(req.params.id)
      .then(resume => res.json(resume))
      .catch(err =>
          res.status(404).json({ noresumefound: 'No resume found with that ID' })
      );
});

//resume upload route
router.post('/upload', (req, res) => {
  //check to see if correct file type: do this in validations?

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

// router.post('/',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//       const { errors, isValid } = validateTweetInput(req.body);
  
//       if (!isValid) {
//         return res.status(400).json(errors);
//       }
  
//       const newTweet = new Tweet({
//         text: req.body.text,
//         user: req.user.id
//       });
  
//       newTweet.save().then(tweet => res.json(tweet));
//     }
//   );

//+delete route

module.exports = router;