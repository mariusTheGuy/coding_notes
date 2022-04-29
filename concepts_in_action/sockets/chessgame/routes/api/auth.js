const { Router } = require("express");
const { newUser } = require("../../controllers/api/user");

const router = Router();

router.post("/register", newUser);

module.exports = router;
