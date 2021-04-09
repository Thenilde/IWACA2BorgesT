const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://music:123@cluster0.xnrvy.mongodb.net/Musical_Work?retryWrites=true&w=majority',
{ useNewUrlParser:true},(err)=>{
    if (!err){ console.log('Congratulations your mongo is connected TB')}
    else{console.log('Error in your DB Borges:' + err)}
});


require('./music.model');
