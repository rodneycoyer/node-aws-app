const express = require('express');
const userController = require("../controllers/userController");
const passport = require("passport");
const authenticate = require("../authenticate");

const UserRouter = express.Router();

// login
UserRouter.post("/login", passport.authenticate("local"), userController.user_login);

// signup
UserRouter.post("/signup", userController.user_create);

//
// users
//
UserRouter.route("/")
  .get(authenticate.verify_user, userController.user_list)
  .post(authenticate.verify_user, userController.unsupported)
  .put(authenticate.verify_user, userController.unsupported)
  .delete(authenticate.verify_user, userController.unsupported);


//
// userID
//
UserRouter.route("/:id")
  .get(authenticate.verify_user, userController.user_byId)
  .post(userController.unsupported)
  .put(authenticate.verify_user, userController.user_update)
  .delete(authenticate.verify_user, userController.user_deleteById);

module.exports = UserRouter;