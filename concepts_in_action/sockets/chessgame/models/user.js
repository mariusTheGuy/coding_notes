const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  //   username: {
  //     type: String,
  //     required: true,
  //   },
  //   password: {
  //     type: String,
  //     required: true,
  //   },
  user_info: {
    user_rank: {
      type: String,
      enum: ["beginner", "intermidiate", "advance", "expert"],
      default: "beginner",
      required: true,
    },
    user_points: {
      type: Number,
      required: true,
    },
  },
});

// passportLocalMongoose: it will take care of the username and password
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
