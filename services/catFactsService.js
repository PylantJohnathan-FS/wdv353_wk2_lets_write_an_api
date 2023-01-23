const axios = require("axios");
require("dotenv").config();

const getFact = async () => {
    console.log("Fetching Real Fact");
    return await axios.get(`https://catfact.ninja/fact`);
};

module.exports = getFact