const express = require('express');
const router = express.Router();
const getFact = require('../services/catFactsService');
const getList = require('../services/catFactsService');
const getFactById = require('../services/catFactsService');

router.get("/fact", (req,res,next)=>{
    getFact().then(result => {
        // console.log(result);
        res.status(200).json({
            message: 'Fact received',
            metadata:{
                fact: result.data.fact,
                length: result.data.length,
            }
        });
    }).catch(error =>{
        res.status(500).json({
            message: error.message,
            status: error.status,
        })
        console.log("fact is not working");
    });
});

router.get("/list", (req,res,next)=>{
    const maxLength = req.body.maxLength;
    const limit = req.body.limit;
    const urlPassed = `${process.env.listurl}?max_length=${maxLength}&limit=${limit}`;
    getList(maxLength,limit).then(result => {
        console.log(result);
        res.status(200).json({
            message: 'List received',
            metadata:[],
        });
    }).catch(error =>{
        res.status(500).json({
            message: error.message,
            status: error.status,
        })
        console.log("list is not working");
    });
});

router.get("/:id", (req,res,next)=>{
    const id = req.params.id;
    getFactById(id).then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Your fact has arrived.',
            metadata:{
                factID: result.data.operationId,
                fact: result.data.fact,
                length: result.data.length,
            }
        });
    }).catch(error =>{
        res.status(500).json({
            message: error.message,
            status: error.status,
        })
        console.log("No fact for you!");
    });
});

module.exports = router;