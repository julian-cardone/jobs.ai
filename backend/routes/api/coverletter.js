const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("../../config/keys");

//cover letter model
const CoverLetter = require("../../models/CoverLetter");
//resume validtor
const validateCoverLetterInput = require("../../validation/coverletter");

//aws
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");

const generateId = require("../../../frontend/src/utils/generateId");

const s3Config = {
  region: "us-east-1",
  credentials: {
    accessKeyId: keys.awss3,
    secretAccessKey: keys.awss3s,
  },
};

const s3Client = new S3Client(s3Config);
// const s3Config = {
//   accessKeyId: keys.awss3,
//   secretAccessKey: keys.awss3s,
//   region: "us-east-1",
// };

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

// cl get all from user route
router.get("/uploaded/:userId", (req, res) => {
  CoverLetter.find({ userId: req.params.userId })
    // .then((coverletters) => res.json(coverletters))
    // .then((coverletters) => {
    //   for (let i = 0; i < coverletters.length; i++){
    //     s3Client.send(new GetObjectCommand({Bucket: keys.bucketname, Key: coverletters[i].title}))
    //       .then(data => coverletters[i].b64 = data.Body)
    //   }
    //   res.json(coverletters);
    // })
    .then((coverletters) => res.send(coverletters))
    .catch((err) =>
      res
        .status(404)
        .json({ nocoverlettersfound: "No cover letters found from that user" })
    );
});
// .sort({ date: -1 })

//get coverletter with certain id
router.get("/:coverLetterId", async (req, res) => {
  const coverLetter = await CoverLetter.findOne({
    _id: req.params.coverLetterId,
  });

  const streamToString = (stream) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });

  // .then((coverletter) => {
  const { Body } = await s3Client.send(
    new GetObjectCommand({ Bucket: keys.bucketname, Key: coverLetter.title })
  );

  const bodyContents = await streamToString(Body);

  // .then(data => coverletters[i].b64 = data.Body)
  // console.log(coverletter);
  // console.log((data.Body.toString('utf-8')));
  res.send({uri: bodyContents})
});

// .then((coverletter) => res.json(coverletter))
// .catch((err) =>
//   res.status(404).json({ nocoverletterfound: "No cover letter found with that ID" })
// );
// });

//resume upload route
router.post(
  "/upload",
  //check to see if correct file type: do this in validations?

  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateCoverLetterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    //upload to aws s3
    const file = req.body.file.file.slice(28);
    const id = req.body.userId;
    const name = req.body.name;
    let fileName = generateId();

    const cl = await CoverLetter.findOne({
      $or: [{ title: fileName }],
    });

    while (cl) {
      fileName = generateId();
    }

    const bucketParams = {
      Bucket: keys.bucketname,
      Key: fileName,
      Body: file,
    };
    try {
      const data = await s3Client.send(new PutObjectCommand(bucketParams));

      const newCoverletter = new CoverLetter({
        userId: id, //test this out
        title: fileName,
        fileURL: `https://clgptfiles.s3.amazonaws.com/${fileName}`, //how will this come in ? as a string?
        name: name,
      });

      newCoverletter.save().then((coverletter) => res.json(coverletter));
    } catch (err) {
      console.log("Error uploading", err);
    }

    // if good, then create new cover letter
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
