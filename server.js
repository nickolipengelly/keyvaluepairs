const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"client","build")));


app.use('/api/userinfo', require('./routes/userinfo'));

app.use((err, req, res, next) => {
    res.send({error: err.message})
});

mongoose.connect(process.env.MONGODB_URI, ()=> console.log("Connected to MongoDB"));
app.listen(process.env.PORT, ()=> console.log(`Server listening on port ${process.env.PORT}`));