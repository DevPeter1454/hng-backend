/* jshint esversion: 6 */
const express = require('express');
const app = express();
const  mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const responseRouter = require('./routes/api.route');

app.use('/', responseRouter);


// Basic Configuration
const port = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI, (err) => {
    if(err){
        console.log(err.message);
    }else{
        console.log('Mongoose connected successfully');
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
