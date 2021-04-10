const mongoose=require('mongoose');

var musicSchema= new mongoose.Schema({

    instrument:{
        type:String,
        requered:'This field is required.'
        
    },

    price:{
        type:String,
        requered:true
    },

    color:{
        type:String,
        requered:true
    },

    year:{
        type:String,
        requered:true
    },

    comments:{
        type:String,
        requered:true
    },

    data:{
        type:Date,
        default:Date.now
    }
    
});

//Custom validation form price
musicSchema.path('price').validate(function (price) {
   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   return priceRegex.test(preice.text); // Assuming price has a text attribute
}, 'The e-mail field cannot be empty.')


mongoose.model('Music' ,musicSchema);