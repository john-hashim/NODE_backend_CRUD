const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');

const mongoose=require('mongoose');
const db=require('./database/db');

var employeeController=require('./controllers/employeeControler');

mongoose.connect(db.database);

mongoose.connection.on('connected',()=>{
    console.log('connected to database'+db.database);
})

var app=express();
app.use(bodyparser.json());

var port=5000;

app.listen(port,()=>{
    console.log('server running on port '+port);
})

app.use('/employee',employeeController)

