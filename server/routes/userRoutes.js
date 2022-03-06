const express = require("express");
const passport = require("passport");
const userController = require("../controllers/userController");
const authenticate = require("../authenticate");

const UserRouter = express.Router();

// login
UserRouter.post("/login", passport.authenticate("local"), userController.user_login);

// logout
UserRouter.get("/logout", userController.user_logout);

// create new user
UserRouter.post("/signup", userController.create_new_user);

// users
UserRouter.route("/")
  .get(userController.get_all_users)
  .post(authenticate.verify_user, userController.unsupported)
  .put(authenticate.verify_user, userController.unsupported)
  .delete(authenticate.verify_user, userController.unsupported);

// users/:userId
UserRouter.route("/:id")
  .get(userController.get_userId)
  .post(authenticate.verify_user, userController.unsupported)
  .put(authenticate.verify_user, userController.update_userId)
  .delete(authenticate.verify_user, userController.delete_userId);

module.exports = UserRouter;