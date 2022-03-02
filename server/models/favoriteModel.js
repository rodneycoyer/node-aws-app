const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  posts: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Favorite", favoriteSchema);