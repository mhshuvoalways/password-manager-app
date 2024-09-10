const passwordValidation = (value) => {
  const error = {};
  if (!value.email) {
    error.email = "Enter an email";
  }
  if (!value.website) {
    error.website = "Enter a website url";
  }
  if (!value.password) {
    error.password = "Enter a password";
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
