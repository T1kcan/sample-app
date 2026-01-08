const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "dev";

app.get("/", (req, res) => {
  res.json({
    app: "sample-app",
    version: VERSION,
    pod: os.hostname(),
    timestamp: new Date()
  });
});

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

app.get("/readyz", (req, res) => {
  res.status(200).send("ready");
});

/**
 * CPU load endpoint (HPA test için)
 * curl /load
 */
app.get("/load", (req, res) => {
  const end = Date.now() + 5000;
  while (Date.now() < end) {}
  res.send("cpu spike generated");
});

app.listen(PORT, () => {
  console.log(`Sample app running on port ${PORT}`);
});
