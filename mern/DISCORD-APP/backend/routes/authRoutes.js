const expres = require("express");
const router = expres.Router();
const authControllers = require("../controllers/auth/authController");

const auth = require("../middleware/auth");

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);

router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

// test route to verify our auth middleware is working
router.get("/test", auth, (req, res) => {
  res.send("You are full authenticated!.");
});

module.exports = router;
