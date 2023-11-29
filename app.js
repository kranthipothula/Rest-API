const express = require('express');
const app     = express();
const studentRoute = require('./api/routes/student');
const facultyRoute = require('./api/routes/faculty');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Test:Test12345@cluster.ezlvvnm.mongodb.net/');

mongoose.connection.on('error',err=>{
    console.log('connection failed');
})

mongoose.connection.on('connected',connected=>{
    console.log('connection with database successfully');
})

app.use('/student',studentRoute);
app.use('/faculty',facultyRoute);

app.use((req,res,next) => {
    res.status(404).json({
       error:'Bad url' 
    })
})
module.exports = app;