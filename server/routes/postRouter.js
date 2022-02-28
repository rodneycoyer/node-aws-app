const express = require("express");
const postController = require("../controllers/postController");
const authenticate = require("../authenticate");

const postRouter = express.Router();

//
//posts
//
postRouter.route("/")
  .get(authenticate.verify_user, postController.post_list)
  .post(authenticate.verify_user, postController.post_create)
  .put(authenticate.verify_user, postController.unsupported)
  .delete(authenticate.verify_user, postController.unsupported);

//
// postId
//
postRouter.route("/:id")
  .get(authenticate.verify_user, postController.post_findOne)
  .post(authenticate.verify_user, postController.unsupported)
  .put(authenticate.verify_user, postController.post_update)
  .delete(authenticate.verify_user, postController.post_deleteOne);

//
// post comments
//
postRouter.route("/:feedId/comments")
  .get(authenticate.verify_user,)
  .post(authenticate.verify_user,)
  .put(authenticate.verify_user,)
  .delete(authenticate.verify_user,);

  //
  // post comment id
  //
  postRouter.route("/:feedId/comments/:commentId")
  .get(authenticate.verify_user,)
  .post(authenticate.verify_user,)
  .put(authenticate.verify_user,)
  .delete(authenticate.verify_user,);

module.exports = postRouter;