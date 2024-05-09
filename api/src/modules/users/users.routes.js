const express = require("express");
const router = express.Router();

const usersController = require("./users.controller");

// Get methods
router.get("/", usersController.findAll);
router.get("/:userID", usersController.findById);

// Create methods
router.post("/", usersController.createUser);

// Delete methods
router.delete("/:userID", usersController.deleteUser);

// Update methods
router.patch("/:userID", usersController.updateUser);

module.exports = router;
