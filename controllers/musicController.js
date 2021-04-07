const express=require('express');
var router=express.Router();

router.get('/',(req, res)=>{
    res.json('sample sample');
});

module.exports=router;