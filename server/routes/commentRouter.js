const express = require("express");
const commentController = require("../controllers/commentController");
const auth = require("../authenticate");

const commentRouter = express.Router();

// comments
commentRouter.route("/")
  .get(commentController.get_all_comments)
  .post(commentController.create_comment)
  .put(commentController.unsupported)
  .delete(commentController.delete_all_comments);

// comments/:commentId
commentRouter.route("/:commentId")
  .get(commentController.get_commentId)
  .post(commentController.unsupported)
  .put(commentController.update_commentId)
  .delete(commentController.delete_commentId);

module.exports = commentRouter;