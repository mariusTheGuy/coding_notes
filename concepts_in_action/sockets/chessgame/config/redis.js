// GETTING ACCESS TO THE .ENV FILE VALUE - KEY PAIRS
if (process.env.NODE_ENV !== "development") {
  require("dotenv").config();
}

const redis = require("redis");

// const host = process.env.REDIS_HOST || "localhost";

// By default, redis.createClient() will use
// 127.0.0.1 (=== localhost) and 6379 as the hostname and port respectively.
// If you have a different host/port, you can supply them like so:
// const redisClient = redis.createClient({ port: <aport>, host: <ahost> });
const redisClient = redis.createClient();

redisClient.on("error", (e) => {
  console.log("Redis: ", e);
  // it shuts down the app
  process.exit(1);
});
redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

// redisClient.set("channelName", "spaceinvaders", redis.print);
// redisClient.get("channelName", redis.print);

module.exports = redisClient;
