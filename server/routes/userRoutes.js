const express = require("express");
const passport = require("passport");
const userController = require("../controllers/userController");
const auth = require("../controllers/authenticate");
const cors = require("../controllers/cors");
const UserRouter = express.Router();

// login
UserRouter.post(
  "/login",
  cors.corsWithOptions,
  passport.authenticate("local"),
  userController.user_login
);

// logout
UserRouter.get(
  "/logout",
  cors.corsWithOptions,
  userController.user_logout
);

// create new user
UserRouter.post(
  "/register",
  cors.corsWithOptions,
  userController.create_new_user
);

// users
UserRouter.route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus = 200)
  .get(cors.corsWithOptions, userController.get_all_users)
  .post(cors.corsWithOptions, auth.verify_user, userController.unsupported)
  .put(cors.corsWithOptions, auth.verify_user, userController.unsupported)
  .delete(cors.corsWithOptions, auth.verify_user, auth.verify_admin, userController.unsupported);

// users/:userId
UserRouter.route("/:userId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus = 200)
  .get(cors.corsWithOptions, userController.get_userId)
  .post(cors.corsWithOptions, auth.verify_user, userController.unsupported)
  .put(cors.corsWithOptions, auth.verify_user, userController.update_userId)
  .delete(cors.corsWithOptions, auth.verify_user, userController.delete_userId);

module.exports = UserRouter;