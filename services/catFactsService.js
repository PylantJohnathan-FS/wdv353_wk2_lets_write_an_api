const axios = require("axios");
require("dotenv").config();

const getFact = async (catFact) => {
    console.log("Fetching Real Fact");
    return await axios.get(`${process.env.url}`);
};

module.exports = getFact