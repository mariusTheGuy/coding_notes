// GETTING ACCESS TO THE .ENV FILE VALUE - KEY PAIRS
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// PRODUCTION: URL To connect to ATLAS
// process.env.DB_URL;
// DEVELOPMENT:
// "mongodb://localhost:27017/yelp-camp"
const dbURL = process.env.DB_URL || "mongodb://localhost:27017/chess_game";

const mongoose = require("mongoose");
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Mongo -- Database connected");
});

module.exports = db;
