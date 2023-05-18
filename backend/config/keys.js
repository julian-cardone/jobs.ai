module.exports = {
  secretOrKey: process.env.SECRET_OR_KEY,
  mongoURI: process.env.MONGO_URI,
  googleAuth: process.env.GOOGLE_AUTH_API,
  awss3: process.env.AWS_ACCESS_KEY,
  awss3s: process.env.AWS_ACCESS_KEY_S,
  bucketname: process.env.AWS_S3_BUCKET_NAME,
  isProduction: process.env.NODE_ENV === "production",
};
