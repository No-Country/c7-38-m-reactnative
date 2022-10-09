const express = require("express");

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const usersRouter = express.Router();

usersRouter.get("./", getAllUsers);
usersRouter.post("./", createUser);
usersRouter.patch("/:id", getUserById);
usersRouter.patch("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

module.exports = { usersRouter };
