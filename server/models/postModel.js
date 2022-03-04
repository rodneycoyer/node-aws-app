const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    required: true
  },
  media: {
    type: String,
    default: ""
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Post", postSchema);