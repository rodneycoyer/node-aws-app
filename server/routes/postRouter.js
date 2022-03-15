const express = require("express");
const postController = require("../controllers/postController");
const auth = require("../controllers/authenticate");
const cors = require("../controllers/cors");

const postRouter = express.Router();

// posts
postRouter.route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus = 200)
  .get(cors.corsWithOptions, postController.get_all_posts)
  .post(cors.corsWithOptions, postController.create_post, auth.verify_user)
  .put(cors.corsWithOptions, postController.unsupported, auth.verify_user)
  .delete(cors.corsWithOptions, postController.delete_all_posts, auth.verify_user);

// posts/:postId
postRouter.route("/:postId")
  .options(cors.corsWithOptions, cors.corsWithOptions, (req, res) => res.sendStatus = 200)
  .get(cors.corsWithOptions, postController.get_postId)
  .post(cors.corsWithOptions, postController.unsupported, auth.verify_user)
  .put(cors.corsWithOptions, postController.update_postId, auth.verify_user)
  .delete(cors.corsWithOptions, postController.delete_postId, auth.verify_user);

module.exports = postRouter;