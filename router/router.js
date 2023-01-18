const express = require('express');
const router = express.Router();
const getFact = require('../services/catFactsService');

router.get("/", (req,res)=>{
    getFact().then(result => {
        console.log(result.data);
        res.status(200).json({
            fact: result.data.content.fact,
        })
    }).catch(error =>{
        res.status(500).json({
            message: error.message,
            status: error.status,
        })
    })
});

module.exports = router;