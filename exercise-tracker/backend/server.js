const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();



const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,

})



const connection = mongoose.connection;
connection.once('open', () => {

    console.log("Running")
})


const exerciserouter = require('./routes/exercises')
const usersrouter = require('./routes/users')


app.use('/exercises', exerciserouter)
app.use('/users', usersrouter);

app.listen(port, () => {

    console.log(`Its running in port number :${port}`);
})

module.exports = app;