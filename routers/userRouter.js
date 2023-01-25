const router = require("express").Router();
const {
  register,
  login,
  getUser,
  getMyAccount,
} = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

router.post("/register", register);
router.post("/login", login);
router.get("/get", authenticate, getUser);
router.get("/getmyaccount", authenticate, getMyAccount);

module.exports = router;
