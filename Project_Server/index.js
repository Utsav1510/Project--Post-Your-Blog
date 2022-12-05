require('dotenv').config();


const express = require('express');
var app=express();
const cors = require('cors');
app.use(cors());;
app.use(express.json());  // app will deal on json data
const routes =require('./routes/routes')
const mongoose= require('mongoose')
const dbString=process.env.DATABASE_URL;
mongoose.connect(dbString);
const db=mongoose.connection;
db.on("error", (error)=>{
    console.log(error)
})   //first method

db.once("connected",()=>{
    console.log("Database Connected")

})

app.use('/genuine',routes)



app.listen(3000,()=>{
    console.log(`server started at localhost ${3000}`)
})
