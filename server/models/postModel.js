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
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Post", postSchema);