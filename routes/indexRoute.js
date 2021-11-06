const express = require("express");
const HomeController = require("../controllers/indexController");

const router = express.Router();

router.get("/", HomeController.home);

module.exports = router;
