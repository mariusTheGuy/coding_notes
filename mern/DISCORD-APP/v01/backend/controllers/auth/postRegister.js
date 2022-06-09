const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  // res.send("register route");
  try {
    const { username, password, email } = req.body;

    // check if email exists
    const userExists = await User.exists({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(409).send("Email already in use");
    }
    // encrypt pw
    const encryptedPassword = await bcrypt.hash(password, 10);
    // save user
    const user = await User.create({
      email: email.toLowerCase(),
      password: encryptedPassword,
      username,
    });
    // create JWT Token
    // const token = "JWT Token";
    const token = jwt.sign(
      // object mean to be signed
      {
        userID: user._id,
        email,
      },
      // secret token
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    return res.status(201).json({
      userDetails: {
        email: user.email,
        username: user.username,
        token,
      },
    });
  } catch (err) {
    return res.status(500).send("Error ocurr, please try again.");
  }
};

module.exports = postRegister;
