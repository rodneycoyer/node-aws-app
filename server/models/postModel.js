const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: {
    type: String,
    default: "",
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
})

const postSchema = new Schema({
  text: {
    type: String,
    default: "",
  },
  media: {
    type: String,
    default: "string",
  },
  comments: [commentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model("Posts", postSchema);