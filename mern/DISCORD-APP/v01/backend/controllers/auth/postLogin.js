const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  // res.send("login route");
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user && (await bcrypt.compare(password, user.password))) {
      // send new token
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

      return res.status(200).json({
        userDetails: {
          email: user.email,
          username: user.username,
          token,
        },
      });
    }
    return res.status(400).send("Invalid credentials, please try again.");
  } catch (err) {
    res.status(500).send("Something went wrong, please try again.");
  }
};

module.exports = postLogin;
