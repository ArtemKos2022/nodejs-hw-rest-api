const { HttpError } = require("../helpers");

const validateBody = (schema) => (req, res, next) => {
  const { body } = req;

  const { error } = schema.validate(body);

  if (error) {
    const err = new HttpError(400, error.message);
    next(err);
  }

  next();
};

module.exports = validateBody;