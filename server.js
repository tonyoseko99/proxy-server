// server.js
const express = require("express");
const axios = require("axios");
const makeApiRequest = require("./makeApiRequest");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Proxy route
app.get("/motivation", async (req, res) => {
  try {
    const response = await makeApiRequest("motivation");
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/success", async (req, res) => {
  try {
    const response = await makeApiRequest("success");
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
