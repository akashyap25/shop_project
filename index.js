const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet= require("helmet");
const morgan = require("morgan");
const app = express();
dotenv.config();
port= process.env.port || 3000;

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err); });

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // bodyparser --parses the request to json format
app.use(helmet());
app.use(morgan("common"));



app.get("/", (req, res)=>{
    res.send("Welcome to My Project");
})


app.listen(port, function(){
    console.log(`server running on port ${port}`);
    });