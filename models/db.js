const mongoose=require('mongoose');

//mongoose.connect('mongodb+srv://music:123@cluster0.vkjg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//{ useNewUrlParser:true},(err)=>{
 
mongoose.connect('mongodb+srv://music:123@cluster2.dst31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser:true},(err)=>{
    if (!err){ console.log('Congratulations your mongo is connected')}
    else{console.log('Error in your DB Borges:' + err)}
});

require('./music.model');
