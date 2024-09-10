const passwordValidation = (value) => {
  const error = {};
  if (!value.category) {
    error.category = "Please provide a category name";
  }
  if (!value.website) {
    error.website = "Please provide a website name";
  }
  if (!value.password) {
    error.password = "Please provide a password";
  }

  let isValid = Object.keys(error).length === 0;

  return {
    error,
    isValid,
  };
};

module.exports = {
  passwordValidation,
};
