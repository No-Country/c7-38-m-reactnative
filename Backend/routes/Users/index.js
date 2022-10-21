const router = require("express").Router();
const {
  createUser,
  searchUserByEmail,
  updateUser,
  getUserById,
} = require("../../controllers/Users/index");
router.get("/:id", getUserById);
router.post("/signIn", createUser);
router.post("/logIn", searchUserByEmail);
router.patch("/", updateUser);

module.exports = router;
