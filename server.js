const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const expressJwt = require('express-jwt');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"client","build")));


app.use("/auth", require('./routes/auth'));
app.use('/api/userinfo', require('./routes/userinfo'));

app.use((err, req, res, next) => {
    console.error(err);
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
     return res.send({error: err.message})
});
<<<<<<< HEAD

mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, ()=> console.log("Connected to MongoDB"));
=======
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true}, ()=> console.log("Connected to MongoDB"));
>>>>>>> 5c14c7beda2da82aa068ff48974c31dfdb660d70
app.listen(process.env.PORT, ()=> console.log(`Server listening on port ${process.env.PORT}`));