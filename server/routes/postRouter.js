const express = require("express");
const postController = require("../controllers/postController");
const auth = require("../authenticate");

const postRouter = express.Router();

// posts
postRouter.route("/")
  .get(postController.get_all_posts, auth.verify_user)
  .post(postController.create_post, auth.verify_user)
  .put(postController.unsupported, auth.verify_user)
  .delete(postController.delete_all_posts, auth.verify_user);

// posts/:postId
postRouter.route("/:postId")
  .get(postController.get_postId, auth.verify_user) //
  .post(postController.unsupported, auth.verify_user)
  .put(postController.update_postId, auth.verify_user)
  .delete(postController.delete_postId, auth.verify_user);

module.exports = postRouter;