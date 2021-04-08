const express=require('express');
var router=express.Router();

router.get('/',(req, res)=>{
    res.render("music/addOrEdit",{
        viewTitle:"Welcome to the instruments store B"
    });
});

router.post('/',(req, res)=>{
     console.log('hi');
    });

module.exports=router;