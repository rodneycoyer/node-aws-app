const express = require("express");
const commentController = require("../controllers/commentController");
const auth = require("../authenticate");

const commentRouter = express.Router();

// comments
commentRouter.route("/")
  .get(commentController.get_all_comments, auth.verify_user)
  .post(commentController.create_comment, auth.verify_user)
  .put(commentController.unsupported, auth.verify_user)
  .delete(commentController.delete_all_comments, auth.verify_user);

// comments/:commentId
commentRouter.route("/:commentId")
  .get(commentController.get_commentId, auth.verify_user)
  .post(commentController.unsupported, auth.verify_user)
  .put(commentController.update_commentId, auth.verify_user)
  .delete(commentController.delete_commentId, auth.verify_user);

module.exports = commentRouter;