const User = require("../models/userModel");
const passport = require("passport");
const authenticate = require("../authenticate");

// logout
// google o-auth

// denied requests
exports.unsupported = (req, res) => {
  res.statusCode = 403;
  res.end("Operation not supported");
};

// user login
exports.user_login = (req, res) => {
  const token = authenticate.get_jwt({ _id: req.user._id })
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ success: true, token: token, status: "You are successfully logged in!!"})
};

// create new user
exports.user_create = (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    err => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Success!! You are Registered!" });
        });
      }
    }
  );
};

// list users
exports.user_list = (req, res, next) => {
  User.find()
    .then((users) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(users)
    })
    .catch(err => next(err));
};

// get user by id
exports.user_byId = (req, res, next) => {
  User.findById()
    .then((user) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(user);
    })
    .catch(err => next(err));
};

// update user by id
exports.user_update = (req, res, next) => {
  User.findByIdAndUpdate(req.params.userId,
    { set: req.body },
    { new: true }
  )
    .then((user) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(user);
    })
    .catch(err => next(err));
};

// delete user by id
exports.user_deleteById = (req, res, next) => {
  User.findByIdAndDelete(req.params.userId)
    .then((response) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(response);
    })
    .catch(err => next(err));
};