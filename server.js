// server.js
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const API_BASE_URL = "https://olato-quotes.p.rapidapi.com/";

app.use(express.json());

// Proxy route
app.get("/motivation", async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}motivation`, {
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "olato-quotes.p.rapidapi.com",
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin (for testing purposes)
      },
      params: {
        quotes: "random quotes",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
