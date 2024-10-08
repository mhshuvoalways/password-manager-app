const router = require("express").Router();
const {
  addPassword,
  getPassword,
  updatePassword,
  reorderPasswords,
  deletePassword,
} = require("../controllers/passwordController");
const authenticate = require("../middlewares/authenticate");

router.post("/add", authenticate, addPassword);
router.get("/get", authenticate, getPassword);
router.put("/update/:updateId", authenticate, updatePassword);
router.put("/reorder", authenticate, reorderPasswords);
router.delete("/delete/:deleteId", authenticate, deletePassword);

module.exports = router;
