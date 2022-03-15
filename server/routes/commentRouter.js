const express = require("express");
const commentController = require("../controllers/commentController");
const auth = require("../controllers/authenticate");
const cors = require("../controllers/cors");

const commentRouter = express.Router();

// comments
commentRouter.route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus = 200)
  .get(cors.corsWithOptions, commentController.get_all_comments, auth.verify_user)
  .post(cors.corsWithOptions, commentController.create_comment, auth.verify_user)
  .put(cors.corsWithOptions, commentController.unsupported, auth.verify_user)
  .delete(cors.corsWithOptions, commentController.delete_all_comments, auth.verify_user);

// comments/:commentId
commentRouter.route("/:commentId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus = 200)
  .get(cors.corsWithOptions, commentController.get_commentId, auth.verify_user)
  .post(cors.corsWithOptions, commentController.unsupported, auth.verify_user)
  .put(cors.corsWithOptions, commentController.update_commentId, auth.verify_user)
  .delete(cors.corsWithOptions, commentController.delete_commentId, auth.verify_user);

module.exports = commentRouter;