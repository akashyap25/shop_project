const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const { serverConfig } = require('./config')
const routerapi = require('./routes')

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected Successfully'))
    .catch((err) => { console.error(err); });

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // bodyparser --parses the request to json format
app.use(helmet());
app.use(morgan("common"));

app.use('/', routerapi)

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on port ${serverConfig.PORT}`);
});