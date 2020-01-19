const express = require('express');

const bodyparser = require('body-parser');

const app = express();

const mongoose = require('./Database/dbserver')

const router = require('./Routes/routes');

const errorlogger = require("./Services/errorlogger");

app.use(bodyparser.json());

app.use("/", router);

app.use(errorlogger);

app.listen(3000,()=>
{
    console.log("Server is listening on port 3000");
})