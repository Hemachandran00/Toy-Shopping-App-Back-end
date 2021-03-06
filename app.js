const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv/config')
app.use(cors());
app.use(bodyParser.json());


const categRoute=require('./routes/categ');

app.use('/category',categRoute);


const prodRoute=require('./routes/prod');

app.use('/product',prodRoute);






mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true},()=>{
    console.log("Connect to db");
})

app.listen(3000);