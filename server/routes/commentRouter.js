const express = require("express");
const commentController = require("../controllers/commentController");
const auth = require("../authenticate");

const commentRouter = express.Router();

// comments
commentRouter.route("/")
  .get(auth.verify_user, commentController.get_all_comments)
  .post(auth.verify_user, commentController.create_comment)
  .put(auth.verify_user, commentController.unsupported)
  .delete(auth.verify_user, commentController.delete_all_comments);

// comments/:commentId
commentRouter.route("/:commentId")
  .get(auth.verify_user, commentController.get_commentId)
  .post(auth.verify_user, commentController.unsupported)
  .put(auth.verify_user, commentController.update_commentId)
  .delete(auth.verify_user, commentController.delete_commentId);

module.exports = commentRouter;