const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');
const Music=mongoose.model('Music');


router.get('/',(req, res)=>{
    res.render("music/addOrEdit",{
        viewTitle:"Welcome to the instruments store B"
    });
});

router.post('/',(req, res)=>{
    insertRecord(req,res);

});

function insertRecord(req,res){
 var music=new Music();
 music.Instrument

}

module.exports=router;