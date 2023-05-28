const { Schema, model } = require("mongoose");
const { regexpEmail, regexpPhone } = require("../schemas/regexps")
const { handleMongooseError } = require("../helpers");


const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: regexpEmail,
      required: true,
    },
    phone: {
      type: String,
      match: regexpPhone,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact
