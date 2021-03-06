require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

// import routes
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");

// connect to DB
const uri = process.env.MONGO_URI;
const connect = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connect.then(() => console.log(
  `Connected correctly to MongoDB Atlas
   port ${process.env.PORT}`
),
  err => console.log(err)
);

const app = express(); // launch express app

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors()); // enable CORS
app.use(logger("dev")); // dev only

// parse json. key values stored in req.params
app.use(express.json());
// parse only urlencoded bodies with query-string library
app.use(express.urlencoded({ extended: false }));

// initialize passport
app.use(passport.initialize());

// serve react app
app.use(express.static(path.join(__dirname, "../client/build/")));

// route handlers
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// unhandled UI requests
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;