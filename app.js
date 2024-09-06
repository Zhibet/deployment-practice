const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://baha12:guinea12@atlascluster.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster').then(()=>{console.log('the atlas database is live')})

const ejsMate = require('ejs');
const homeRoute = require('./routes/homeRoute');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use('/',homeRoute);

const port =  3000;
app.listen(port,()=>{
    console.log(`the app is live on ${port}`)
})