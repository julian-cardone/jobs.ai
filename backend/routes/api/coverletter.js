const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("../../config/keys")

//cover letter model
const CoverLetter = require("../../models/CoverLetter");
//resume validtor
const validateCoverLetterInput = require("../../validation/coverletter");

//aws
const {
  S3Client,
  PutObjectCommand
} = require("@aws-sdk/client-s3");

const s3Config = {
  region: "us-east-1",
  credentials: {
    accessKeyId: keys.awss3,
    secretAccessKey: keys.awss3s
  }
};

// const s3Config = {
//   accessKeyId: keys.awss3,
//   secretAccessKey: keys.awss3s,
//   region: "us-east-1",
// };

const s3Client = new S3Client(s3Config);

//ROUTES:
// resume get all route
// router.get("/", function (req, res, next) {
//   Resume.find()
//     .sort({ date: -1 })
//     .then((resumes) => res.json(resumes))
//     .catch((err) =>
//       res.status(404).json({ noresumesfound: "No resumes found" })
//     );
// });

//resume get all from user route
// router.get("/resume/:userId", (req, res) => {
//   Resume.find({ userId: req.params.userId })
//     .sort({ date: -1 })
//     .then((resumes) => res.json(resumes))
//     .catch((err) =>
//       res
//         .status(404)
//         .json({ noresumesfound: "No resumes found from that user" })
//     );
// });

//get coverletter with certain id
router.get("/:id", (req, res) => {
  Resume.findById(req.params.id)
    .then((coverletter) => res.json(coverletter))
    .catch((err) =>
      res.status(404).json({ nocoverletterfound: "No resume found with that ID" })
    );
});

//resume upload route
router.post(
  "/upload",
  //check to see if correct file type: do this in validations?

  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateCoverLetterInput(req.body);
    let success = false;

    if (!isValid) {
      return res.status(400).json(errors);
    }

    //upload to aws s3
    const file = req.body.file;
    console.log(file);
    const fileName = "test";

    const bucketParams = {
      Bucket: keys.bucketname,
      Key: fileName,
      Body: file,
    };
    try {
      const data = await s3Client.send(new PutObjectCommand(bucketParams));
      res.send(data)
      success = true;
    } catch (err) {
      console.log("Error uploading", err);
    }
  
    //if good, then create new cover letter
    // if (success){
    //   const newCoverletter = new CoverLetter({
    //     userId: req.user.id, //test this out
    //     title: req.body.title,
    //     fileURL: req.body.file, //how will this come in ? as a string?
    //   });
  
    //   newCoverletter.save().then((coverletter) => res.json(coverletter));
    // }
  }
);

//resume delete route
// router.delete(
//   "/:id",
//   //check to see if correct file type: do this in validations?

//   passport.authenticate("jwt", { session: false }), //test with jwt auth
//   (req, res) => {
//     Resume.findOneAndDelete(req.params.id)
//       .then((resume) => res.json({ msg: "deleted successfully" }))
//       .catch((err) =>
//         res.status(404).json({ noresumefound: "Unable to delete" })
//       );
//   }
// );

//edit resume
// router.put(
//   "/:id",

//   passport.authenticate("jwt", { session: false }), //test with jwt auth
//   (req, res) => {
//     //validate
//     const { errors, isValid } = validateResumeInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     //find and update
//     Resume.findByIdAndUpdate(req.params.id, req.body)
//       .then((resume) => res.json({ msg: "updated successfully" }))
//       .catch((err) =>
//         res.status(404).json({ noresumefound: "Unable to update" })
//       );
//   }
// );

module.exports = router;
