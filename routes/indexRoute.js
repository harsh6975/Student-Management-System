const express = require("express");
const HomeController = require("../controllers/indexController");
const UserRouter = require("./userRoute");

const router = express.Router();

router.get("/", HomeController.home);
router.use("/users", UserRouter);

module.exports = router;
