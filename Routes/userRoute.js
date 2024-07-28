const express = require("express");
const userController = require("../Controllers/userCtrl");

const router = express.Router()

router.post("/register", userController.createUser)

module.exports = router;