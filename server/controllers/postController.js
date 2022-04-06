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

exports.get_all_posts = async (req, res, next) => {
  try {
    const getAllPostsPromise = Post.find()
      .sort({ "_id": -1 })
      .populate("comments.author");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await getAllPostsPromise);
    console.log(await getAllPostsPromise)
  }
  catch (err) {
    next(err);
  }
};

/**
 * 3. get postId
 */

exports.get_postId = async (req, res, next) => {
  try {
    const getPostIdPromise = Post
      .findById(req.params.postId)
      .populate("comments.author");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await getPostIdPromise);
  }
  catch (err) {
    next(err);
  }
};

/**
 * 4. create post
 */

exports.create_post = async (req, res, next) => {
  try {
    const createNewPostPromise = await Post.create(req.body);
    req.body.author = req.user_id;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(createNewPostPromise);
    console.log("Post Created", createNewPostPromise);
  }
  catch (err) {
    next(err);
  }
};

/**
 * 5. update postId
 */

exports.update_postId = async (req, res, next) => {
  try {
    const updatePostIdPromise = Post.findByIdAndUpdate(
      req.params.postId,
      { $set: req.body },
      { new: true }
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await updatePostIdPromise);
  }
  catch (err) {
    next(err);
  }
};

/**
 * 6. delete all posts
 */

exports.delete_all_posts = async (req, res, next) => {
  try {
    const deleteAllPostsPromise = Post.deleteMany();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await deleteAllPostsPromise);
  }
  catch (err) {
    next(err);
  }
};


/**
 * 7. delete postId
 */

exports.delete_postId = async (req, res, next) => {
  try {
    const deletePostIdPromise = Post.findByIdAndDelete(
      req.params.postId
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(await deletePostIdPromise);
  }
  catch (err) {
    next(err);
  }
};