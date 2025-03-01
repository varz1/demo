const express = require("express");
const UserController = require("../controllers/user.controller");

const router = express.Router();

router.post("/users", UserController.createUser);
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUserById);
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
