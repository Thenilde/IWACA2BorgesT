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
 music.instrument=req.body.instrument;
 music.price=req.body.price;
 music.color=req.body.color;
 music.year=req.body.year;
 music.comments=req.body.comments;
 music.save((err,doc)=>{
  if(err)
     res.redirect('music/list');
 else{
     console.log('Error diring recording insert:' ,err);
 }

 });

}

router.get('/list',(req,res)=>{
    res.json('from list');
});

module.exports=router;