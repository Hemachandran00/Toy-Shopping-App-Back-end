const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());


const categRoute=require('./routes/categ');

app.use('/category',categRoute);


const prodRoute=require('./routes/prod');

app.use('/product',prodRoute);






mongoose.connect('mongodb+srv://dbUser:db123@cluster0.0c2pp.mongodb.net/rest?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true},()=>{
    console.log("Connect to db");
})

app.listen(3000);