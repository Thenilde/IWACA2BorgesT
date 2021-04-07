require('./models/db');

const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');

const musicController=require('./controllers/musicController');

var app=express();

app.set('views' ,path.join(__dirname, '/views'));
//I stopped here

app.listen(3000, ()=>{
    console.log('Express server start at port :3000');
});

app.use('/music',musicController);