const Post = require("../models/postModel");

// denied requests
exports.unsupported = (req, res) => {
  res.statusCode = 403;
  res.end("Operation not supported");
};

// list posts
exports.post_list = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(posts);
    })
    .catch(err => next(err));
};

// get postId
exports.post_findOne = (req, res, next) => {
  Post.findById(req.params.postId)
    .then(post => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(post);
    })
    .catch(err => next(err));
};

// create postId
exports.post_create = (req, res, next) => {
  Post.create(req.body)
    .then(post => {
      console.log("Post Created", post);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(post);
    })
    .catch(err => next(err));
};

// update postId
exports.post_update = (req, res, next) => {
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

// delete postId
exports.post_deleteOne = (req, res, next) => {
  Post.findByIdAndDelete(req.params.postId)
    .then(response => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(response);
    })
    .catch(err => next(err));
}



