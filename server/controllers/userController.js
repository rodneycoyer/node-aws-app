const User = require("../models/userModel");
const passport = require("passport");
const auth = require("../controllers/authenticate");

exports.unsupported = (req, res) => {
  res.statusCode = 403;
  res.end("Operation not supported");
};

exports.user_login = async (req, res) => {
  const token = await auth.get_jwt({ _id: req.user._id });
  const user = req.user;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    user: user.username,
    success: true, token: token,
    status: "You are successfully logged in!!"
  });
};

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
            res.json({
              success: true,
              status: "Registration was a Success!!"
            });
          });
        });
      }
    }
  );
};

exports.get_all_users = async (req, res, next) => {
  try {
    const getAllUsersPromise = await User.find();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(getAllUsersPromise);
    console.log(getAllUsersPromise)
  }
  catch (err) {
    next(err);
  }
};

exports.get_userId = async (req, res, next) => {
  try {
    const getUserIdPromise = User.findById(req.params.userId);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await getUserIdPromise);
  }
  catch (err) {
    next(err);
  }
};

exports.update_userId = async (req, res, next) => {
  try {
    const updateUserIdPromise = User.findByIdAndUpdate(
      req.params.userId,
      { set: req.body },
      { new: true }
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await updateUserIdPromise);
  }
  catch (err) {
    next(err);
  }
};

exports.delete_userId = async (req, res, next) => {
  try {
    const deleteUserIdPromise = User.findByIdAndDelete(req.params.userId);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await deleteUserIdPromise.response);
  }
  catch (err) {
    next(err);
  }
};