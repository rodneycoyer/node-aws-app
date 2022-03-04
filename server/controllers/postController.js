const Post = require("../models/postModel");

/*********************************
 *          TOC
 *  1. unsupported operation
 *  2. get all posts
 *  3. get postId
 *  4. create post
 *  5. update postId
 *  6. delete all posts
 *  7. delete postId
 *
 *********************************/

/**
 * 1. denied operation
 */

exports.unsupported = (req, res) => {
  res.statusCode = 403;
  res.end("Operation not supported");
};

/**
 * 2. get all posts
 */

exports.get_all_posts = (req, res, next) => {
  Post.find({})
    .populate("comments.author")
    .then(posts => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(posts);
    })
    .catch(err => next(err));
};

/**
 * 3. get postId
 */

exports.get_postId = (req, res, next) => {
  Post.findById(req.params.postId)
    .populate("comments.author")
    .then(post => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(post);
    })
    .catch(err => next(err));
};

/**
 * 4. create post
 */

exports.create_post = (req, res, next) => {
  Post.create(req.body)
    .then(post => {
      console.log("Post Created", post);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(post);
    })
    .catch(err => next(err));
};


/**
 * 5. update postId
 */

exports.update_postId = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.postId,
    { $set: req.body },
    { new: true }
  )
    .then(post => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(post);
    })
    .catch(err => next(err));
};

/**
 * 6. delete all posts
 */

exports.delete_all_posts = (req, res, next) => {
  Post.deleteMany()
    .then(response => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(response);
    })
    .catch(err => next(err));
}


/**
 * 7. delete postId
 */

exports.delete_postId = (req, res, next) => {
  Post.findByIdAndDelete(req.params.postId)
    .then(response => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(response);
    })
    .catch(err => next(err));
};