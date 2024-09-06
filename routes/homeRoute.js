const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://baha12:guinea12@atlascluster.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster')
const data = require('../models/homeModel')
const homeRoute = express.Router();

homeRoute.get('/',async (req,res)=>{
    const homedata = await data.find({});
    console.log(homedata)
    res.render('home',{homedata})
})

module.exports = homeRoute;