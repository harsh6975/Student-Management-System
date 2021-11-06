const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

router.get("/signin", UserController.signin);
router.get("/signup", UserController.signup);

module.exports = router;
