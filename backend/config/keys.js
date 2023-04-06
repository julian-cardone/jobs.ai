module.exports = {
  secretOrKey: process.env.SECRET_OR_KEY,
  mongoURI: process.env.MONGO_URI,
  googleAuth: process.env.GOOGLE_AUTH_API,
  isProduction: process.env.NODE_ENV === "production",
};
