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
    useUnifiedTopology: true
})



const connection = mongoose.connection;
connection.once('open', () => {

    console.log("Running")
})

const exercise = require('./routes/exercises')
const users = require('./routes/users')

app.use('/exercises', exercise)
app.use('/users', users);

app.listen(port, () => {

    console.log(`Its running in port number :${port}`);
})

module.exports = app;