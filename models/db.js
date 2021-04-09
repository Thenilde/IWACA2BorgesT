const mongoose=require('mongoose');

 //mongoose.connect('mongodb+srv://music:123@cluster2.dst31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//{ useNewUrlParser:true},(err)=>{
   // if (!err){ console.log('Congratulations your mongo is connected')}
    //else{console.log('Error in your DB Borges:' + err)}
//});

mongoose.connect('mongodb+srv://music:123@cluster2.dst31.mongodb.net/Musical_Work?retryWrites=true&w=majority',
{ useNewUrlParser:true},(err)=>{
    if (!err){ console.log('Congratulations your mongo is connected')}
    else{console.log('Error in your DB Borges:' + err)}
});



//mongoose.connect('mongodb://localhost:27017/Musical_Work',
//{ useNewUrlParser:true},(err)=>{
  //  if (!err){ console.log('Congratulations your mongo is connected')}
    //else{console.log('Error in your DB Borges:' + err)}
//});

require('./music.model');
