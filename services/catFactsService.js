const axios = require("axios");
require("dotenv").config();

const getFact = async () => {
    console.log("Fetching Real Fact");
    return await axios.get(`${process.env.facturl}/fact`);
};

const getList = async (maxLength, limit) => {
    console.log("Fetching Real List");
    return await axios.get(`${process.env.listurl}/facts?max_length=${maxLength}&limit=${limit}`);
};

const getFactById = async (id) => {
    return await axios.get(`${process.env.facturl}?operationId=${id}`);
}

module.exports = getFact, getList, getFactById