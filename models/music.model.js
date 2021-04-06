const mongoose=require('mongoose');

var musicSchema= new mongoose.Schema({

    Instrumento:{
        type:String,
        requered:true
        
    },

    Instrumento:{
        type:String,
        requered:true
    },

    Price:{
        type:String,
        requered:true
    },

    Color:{
        type:String,
        requered:true
    },

    Year:{
        type:String,
        requered:true
    },

    Commands:{
        type:String,
        requered:true
    },

    Data:{
        type:Date,
        default:Date.now
    }
    
});

mongoose.model('Music' ,musicSchema);