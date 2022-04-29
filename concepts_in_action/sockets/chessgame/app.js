// GETTING ACCESS TO THE .ENV FILE VALUE - KEY PAIRS
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

// DB's
require("./config/dbConnection");
const Dummy = require("./models/dummy");
const User = require("./models/user");
const redisClient = require("./config/redis");
redisClient.connect(); // connect to the server here!

// SESSION
const session = require("express-session");
// PASSPORT
const passport = require("passport");
const localStrategy = require("passport-local");

// ROUTES
const viewRoutes = require("./routes/views");
const authRoutes = require("./routes/api/auth");

const path = require("path");

const ejsMate = require("ejs-mate");
// here we are overriden the default ejs engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static("public")); this works but better use 'path.join'
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
// to parse 'req.body', because it is empty by default
app.use(express.urlencoded({ extended: true }));

// resave and saveUnitialized to fix a deprecation warning
// 'httpOnly' it mitigates the risk of client side script accessing the protected cookie
// 'store' default is the computer memory, only for devlopment purposes
const sessionConfig = {
  // for security, we can customized the default session name, 'connect.sid'
  name: "hackerfu",
  secret: "thisisnotasecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    // 'httpOnly' set to true:
    // cookies set under the session will be only accessible
    // via HTTP request, not JS
    httpOnly: true,
    // (localhost does not support HTTPS)
    // if we want our cooky to work only under HTTPS
    // secure: true,
    expires: Date.now + 1000 * 3600 * 24 * 7,
    maxAge: 1000 * 3600 * 24 * 7,
  },
  // store:
};
app.use(session(sessionConfig));

// PASSPORT
app.use(passport.initialize());
// (use session() before passport.session()
// to ensure that the login session is restored in the correct order)
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* app.get("/dummy", async (req, res) => {
  const dummy = new Dummy({
    dummyName: "dummyBob",
  });
  const result = await dummy.save();
  res.send(result);
}); */
/* app.get("/fakeuser", async (req, res) => {
  const user = new User({
    email: "cleo@hedgehog.com",
    username: "mowgli",
    user_info: {
      // user_rank: "beginner",
      user_points: 1000,
    },
  });
  // it will check if the 'username' is unique
  // it will hash and salt the 'password'
  // 'register' comes from 'passportLocalMongoose'
  // the new user will be stored in the Mongo DB
  const newUser = await User.register(user, "passwordwisblue");
  res.send(newUser);
}); */

app.use("/", viewRoutes);
app.use("/", authRoutes);

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log("Express server listening... ", `http://localhost:${port}`);
});
