const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Comment", commentSchema);