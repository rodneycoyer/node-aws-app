const express = require("express");
const postController = require("../controllers/postControllers");

const postRouter = express.Router();

//
//posts
//
postRouter.route("/")
  .get(postController.post_many)
  .post(postController.post_create)
  .put(postController.unsupported)
  .delete(postController.unsupported);

//
// postId
//
postRouter.route("/:id")
  .get(postController.post_findOne)
  .post(postController.unsupported)
  .put(postController.post_update)
  .delete(postController.post_deleteOne)

//
// post comments
//
postRouter.route("/:postId/comments")
  .get()
  .post()
  .put()
  .delete()

module.exports = postRouter;