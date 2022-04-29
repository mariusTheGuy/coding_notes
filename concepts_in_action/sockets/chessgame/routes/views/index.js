const { Router } = require("express");
const {
  getRegisterPage,
  getLoginPage,
  getHomePage,
} = require("../../controllers/views");

const router = Router();

router.get("/", getHomePage);

router.get("/register", getRegisterPage);

router.get("/login", getLoginPage);

module.exports = router;
