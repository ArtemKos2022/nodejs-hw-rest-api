const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { regexpEmail } = require("../schemas/regexps")

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    match: regexpEmail,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: "",
  }
}, { versionKey: false, timestamps: true });


userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
