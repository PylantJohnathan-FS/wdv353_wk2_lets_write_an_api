const express = require('express');
const router = express.Router();
const getTranslation = require('../services/translationService');
// const getFact = require('../services/catFactsService');

/*router.get("/", (req,res)=>{
    console.log(result.content);
    console.log("running /get for cat facts");
    getFact().then(result => {
        res.status(200).json({
            fact: result.content,
        });
    }).catch(error =>{
        res.status(500).json({
            message: error.message,
            status: error.status,
        })
        console.log("catfacts is not working");
    });
});*/

router.post("/", (req, res)=>{
    const sentence = req.body.sentence;
    console.log(sentence);
    getTranslation(sentence).then(result =>{
        console.log(result);
        res.status(201).json({
            text: result.data.contents.text,
            translated: result.data.contents.translated,
            translation: result.data.contents.translation,
        });
    }).catch(error =>{
        res.status(501).json({
            error:{
                messsage: error.message,
                status: error.status,
            },
        });
    });
});

module.exports = router;