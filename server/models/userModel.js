const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    default: ""
  },
  lastname: {
    type: String,
    default: ""
  },
  userImage: {
    type: String,
    default: ""
  },
  userInfo: {
    type: String,
    default: ""
  },
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  admin: {
    type: Boolean,
    default: false
  }
});

// passport local strategy:
// username, salt/hash password
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);