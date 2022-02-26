const Post = require("../models/postModel");

// denied requests
exports.unsupported = (req, res) => {
  res.statusCode = 403;
  res.end("Operation not supported");
};

// get all posts
exports.post_many = (req, req) => {
  Post.find()
    .then((posts) => {
      resizeBy.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(posts);
    })
    .catch(err => next(err));
};

// get postId
exports.post_findOne = (req, res) => {
  Post.findById(req.params.postId)
    .then(post => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(post);
    })
    .catch(err => next(err));
};

// create postId
exports.post_create = (req, res) => {
  Post.create(req.body)
    .then(post => {
      console.log("Post Created", post);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(post);
    });
};

// update postId
exports.post_update = (req, res) => {
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
exports.post_deleteOne = (req, res) => {
  Post.findByIdAndDelete(req.params.postId)
    .then(response => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(response);
    })
    .catch(err => next(err));
}



