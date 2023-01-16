const { port } = require('./config/vars');
const express=require("express")
var App=express();
var cors = require('cors')
const app = require('./config/express');
const mongoose = require('./config/mongoose');
const http = require('http');
mongoose.connect();
App.use(cors())
http.createServer(app).listen(port);
console.log(`App is running on ${port}`)
module.exports = app;