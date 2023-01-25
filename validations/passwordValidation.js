const passwordValidation = (value) => {
  const error = {};
  if (!value.website) {
    error.website = "Please provide the website name";
  }
  if (!value.username) {
    error.username = "Please provide the username";
  }
  if (!value.password) {
    error.password = "Please provide the password";
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
