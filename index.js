const express = require('express');
const productsRoute = require('./route/product');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const app = express();

app.use([bodyParser.urlencoded({extended: true}), express.json()]);
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0.htps1vj.mongodb.net/');

const conn = mongoose.connection;
conn.on('connected',()=>{console.log("Connected with DB Cloud")});

app.use('/products', productsRoute );




const port = process.env.port || 8080;
app.listen(port,()=>{
    console.log("It is working");
});

module.exports = app;