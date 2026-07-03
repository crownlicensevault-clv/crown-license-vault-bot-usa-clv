const express = require("express");
const app = express();

console.log("Crown License Vault Bot Running...");

setInterval(() => {
  console.log("Bot is alive...");
}, 10000);

app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(3000, () => {
  console.log("Server running");
});
