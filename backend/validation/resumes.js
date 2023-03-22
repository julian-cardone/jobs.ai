const Validator = require("validator");

module.exports = function validateResumeInput(data) {
  let errors = {};

  // data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 0, max: 50 })) {
    errors.title = "Title must be between 0 and 50 characters";
  }

  if (Validator.isEmpty(data.file)) {
    errors.file = "Resume file is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
