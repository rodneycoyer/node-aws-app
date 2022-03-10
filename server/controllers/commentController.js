const Comment = require("../models/commentModel");

/*********************************
 *          TOC
 *  1. unsupported operation
 *  2. get all comments
 *  3. get commentId
 *  4. create comment
 *  5. update commentId
 *  6. delete comments
 *  7. delete commentId
 *
 *********************************/

/**
 * 1. unsupported operation
 */

exports.unsupported = (req, res) => {
  res.statusCode = 403;
  res.end("Operation not supported");
};

/**
 * 2. get all comments
 */

exports.get_all_comments = async (req, res, next) => {
  try {
    const getAllCommentsPromise = Comment.find().populate("author");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await getAllCommentsPromise);
  }
  catch (err) {
    next(err);
  }
};

/**
 * 3. get commentId
 */

exports.get_commentId = async (req, res) => {
  try {
    const getCommentIdPromise = Comment
      .findById(req.params.commentId)
      .populate("author");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await getCommentIdPromise);
  }
  catch (err) {
    next(err);
  }
};

/**
 * 4. create comment
 */

exports.create_comment = (req, res, next) => {
  if (req.body) {
    console.log("req.body:", req.body);
    req.body.author = req.user_id;
    Comment.create(req.body)
      .then(comment => {
        Comment.findById(comment._id)
          .populate("author")
          .then(comment => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(comment);
          })
          .catch(err => next(err));
      })
  } else {
    const err = new Error("Comment not found in req.body");
    err.status = 404;
    return next(err);
  }
};

/**
 * 5. update commentId
 */

exports.update_commentId = (req, res, next) => {
    Comment.findById(req.params.commentId)
    .then(comment => {
      if (comment) {
        if (!comment.author.equals(req.user._id)) {
          const err = new Error("You are not authorized to update this comment!");
          err.status = 403;
          return next(err);
        }
        req.body.author = req.user._id;
        Comment.findByIdAndUpdate(req.params.commentId,
          { $set: req.body },
          { new: true }
        )
          .then(comment => {
            Comment.findById(comment._id)
            .populate("author")
            .then(comment => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(comment);
            })
            .catch(err => next(err));
          })
        .catch(err => next(err));
      } else {
        const err = new Error(`Comment ${req.params.commentId} not found`);
        err.status = 404;
        return next(err);
      }
    })
    .catch(err => next(err));
};

/**
 * 6. delete comments
 */

exports.delete_all_comments = (req, res, next) => {
  Comment.remove({})
    .then(response => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(response);
    })
    .catch(err => next(err));
}

/**
 * 7. delete commentId
 */

exports.delete_commentId = (req, res, next) => {
  Comment.findById(req.params.commentId)
    .then(comment => {
      if (comment) {
        if (!comment.author.equals(req.user._id)) {
            const err = new Error('You are not authorized to delete this comment!');
            err.status = 403;
            return next(err);
        }
        Comment.findByIdAndRemove(req.params.commentId)
          .then(resp => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
          })
        .catch(err => next(err));
      } else {
        const err = new Error(`Comment ${req.params.commentId} not found`);
        err.status = 404;
        return next(err);
      }
    })
    .catch(err => next(err));
};