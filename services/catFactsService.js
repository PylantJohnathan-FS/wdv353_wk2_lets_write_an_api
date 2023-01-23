const axios = require("axios");
require("dotenv").config();

const getFact = async () => {
    console.log("Fetching Real Fact");
    return await axios.get(`${process.env.url}`);
};

const getList = async (maxLength, limit) => {
    console.log("Fetching Real List");
    return await axios.get(`${process.env.url}s?max_length=${maxLength}&limit=${limit}`);
};

module.exports = getFact, getList