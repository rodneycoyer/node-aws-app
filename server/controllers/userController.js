const User = require("../models/userModel");
const passport = require("passport");
const authenticate = require("../authenticate");

/*********************************
 *          TOC
 *  1. unsupported operation
 *  2. login
 *  3. logout
 *  4. create new user
 *  5. get all users
 *  6. get userId
 *  7. update userId
 *  8. delete userId
 *          TBA
 *  1. google OAuth 2.0 support
 *
 *********************************/

/**
 * 1. unsupported requests
 */

exports.unsupported = (req, res) => {
  res.statusCode = 403;
  res.end("Operation not supported");
};

/**
 * 2. login
 */

exports.user_login = (req, res) => {
  const token = authenticate.get_jwt({ _id: req.user._id })
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ success: true, token: token, status: "You are successfully logged in!!" })
};

/**
 * 3. logout
 */

exports.user_logout = (req, res, next) => {
  if (req.session) {
    res.session.destroy();
    res.clearCookie("session-id");
    res.redirect("/");
  } else {
    err = new Error("You are not logged in!");
    err.status = 401;
    return next(err);
  }
};

/**
 * 4. create new user
 */

exports.create_new_user = (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        if (req.body.firstname) {
          user.firstname = req.body.firstname;
        }
        if (req.body.lastname) {
          user.lastname = req.body.lastname;
        }
        user.save(err => {
          if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({ err: err });
            return;
          }
          passport.authenticate("local")(req, res, () => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({ success: true, status: "Success!! You are Registered!" });
          });
        });
      }
    }
  );
};

/**
 * 5. get all users
 */

exports.get_all_users = (req, res, next) => {
  User.find()
    .then((users) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(users)
    })
    .catch(err => next(err));
};

/**
 * 6. get userId
 */

exports.get_userId = (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(user);
    })
    .catch(err => next(err));
};

/**
 * 7. update userId
 */

exports.update_userId = (req, res, next) => {
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

/**
 * 8. delete userId
 */

exports.delete_userId = (req, res, next) => {
  User.findByIdAndDelete(req.params.userId)
    .then((response) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(response);
    })
    .catch(err => next(err));
};