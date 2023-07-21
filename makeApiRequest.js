const axios = require("axios");

const API_BASE_URL = "https://olato-quotes.p.rapidapi.com/";
const API_KEY = process.env.API_KEY;

const makeApiRequest = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "olato-quotes.p.rapidapi.com",
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin (for testing purposes)
      },
      params: {
        quotes: "random quotes",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

module.exports = makeApiRequest;
