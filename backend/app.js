const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require('cors');
const csurf = require('csurf');
const { isProduction } = require('./config/keys');
const debug = require('debug');

//this
require("./models/User");
require("./models/Resume");
require("./config/passport"); // <-- ADD THIS LINE
const passport = require("passport");
var path = require("path");
const bodyParser = require("body-parser");
//

//routers
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/api/users");
const resumesRouter = require("./routes/api/resumes");
const csrfRouter = require('./routes/api/csrf');

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Security Middleware
if (!isProduction) {
  // Enable CORS only in development because React will be on the React
  // development server (http://localhost:3000). (In production, the Express 
  // server will serve the React files statically.)
  app.use(cors());
}

// Set the _csrf token and create req.csrfToken method to generate a hashed
// CSRF token
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);

//this
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//

//attaching express routers
app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/resumes", resumesRouter);
app.use('/api/csrf', csrfRouter);
app.use(passport.initialize());

// Express custom middleware for catching all unmatched requests and formatting
// a 404 error to be sent as the response.
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

const serverErrorLogger = debug('backend:error');

// Express custom error handler that will be called whenever a route handler or
// middleware throws an error or invokes the `next` function with a truthy value
app.use((err, req, res, next) => {
  serverErrorLogger(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    statusCode,
    errors: err.errors
  })
});

module.exports = app;
