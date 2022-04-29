const User = require("../../models/user");

module.exports.newUser = async (req, res, next) => {
  //   res.send(req.body);
  // in this case,
  // we are going to handle possible errors besides the catchAsync helper
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    // PASSPORT: '.register':
    // method to register a new user instance with a given password.
    // Checks if username is unique.
    const registeredUser = await User.register(user, password);
    // PASSPORT: then we login the user to save them that step
    // req.login(registeredUser, (err) => {
    //   if (err) return next(err);
    // });
    // req.flash("success", "Welcome to Yelp-Camp!");
    console.log(registeredUser);
    res.redirect("/");
  } catch (e) {
    res.send(e);
    // req.flash("error", e.message);
    // res.redirect("/register");
  }
};
