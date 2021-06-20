let redis = require("redis");
let client = redis.createClient();

client.on("on", (err) => {
  console.log(`Redis connection error`, err);
});

module.exports = client;
