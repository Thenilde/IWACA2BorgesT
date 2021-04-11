const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://store:1234@cluster0.vkjg1.mongodb.net/Musical_Work?retryWrites=true&w=majority',
{ useNewUrlParser:true},(err)=>{
    if (!err){ console.log('Congratulations your mongo is connected TB Silva')}
    else{console.log('Error in your DB Borges:' + err)}
});


require('./music.model');
