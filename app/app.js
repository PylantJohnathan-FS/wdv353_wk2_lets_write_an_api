const express = require('express');
const router = require('../router/router');
const app = express();

//middleware
app.use(express.json());

//actuator
app.get('/health', (req,res,next)=>{
    res.status(200).json({message:'Service is up'});
});

//middleware for router
app.use('/api', router);

//middleware to handle errors and bad urls
app.use((req,res,next)=>{
    const error = new Error("URL Not Found");
    error.status = 404;
    next(error);
});

//middle to return json response for error and bad urls
app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;