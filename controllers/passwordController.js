const Password = require("../Model/Password");
const serverError = require("../utils/serverError");
const { passwordValidation } = require("../validations/passwordValidation");

const addPassword = (req, res) => {
  const { website, category, password, note } = req.body;
  const validation = passwordValidation({
    website,
    category,
    password,
  });
  if (validation.isValid) {
    const passObj = {
      author: req.user._id,
      website,
      category,
      password,
      note,
    };
    new Password(passObj)
      .save()
      .then((response) => {
        res.status(200).json(response);
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const getPassword = (req, res) => {
  Password.find({ author: req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const updatePassword = (req, res) => {
  const { updateId } = req.params;
  const { website, category, password, note } = req.body;
  const validation = passwordValidation({
    website,
    category,
    password,
  });
  if (validation.isValid) {
    const passObj = {
      website,
      category,
      password,
      note,
    };
    Password.findOneAndUpdate({ _id: updateId }, passObj, { new: true })
      .then((response) => {
        res.status(200).json(response);
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const deletePassword = (req, res) => {
  const { deleteId } = req.params;
  Password.findOneAndRemove({ _id: deleteId })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = { addPassword, getPassword, updatePassword, deletePassword };
