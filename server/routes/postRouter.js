const express = require("express");
const postController = require("../controllers/postController");
const auth = require("../authenticate");

const postRouter = express.Router();

// posts
postRouter.route("/")
  .get(postController.get_all_posts)
  .post(postController.create_post)
  .put(postController.unsupported)
  .delete(postController.delete_all_posts);

// posts/:postId
postRouter.route("/:postId")
  .get(postController.get_postId) //
  .post(postController.unsupported)
  .put(postController.update_postId)
  .delete(postController.delete_postId);

module.exports = postRouter;