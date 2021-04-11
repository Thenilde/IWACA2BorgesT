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
    if(req.body._id=='')
    insertRecord(req,res);
    else
    updateRecord(req,res);

});

function insertRecord(req,res){
 var music=new Music();
 music.instrument=req.body.instrument;
 music.price=req.body.price;
 music.color=req.body.color;
 music.year=req.body.year;
 music.comments=req.body.comments;
 music.save((err,doc)=>{
  if(!err)
     res.redirect('music/list');
 else{

    if(err.name==ValidationError){
    handleValidationError(err,req.body);
      res.render("music/addOrEdit",{
        viewTitle:"Welcome to the instruments store B",
        music:req.body
    });

    }
   else
     
     console.log('Error diring record insert:' ,err);
 }

 });

}

function updateRecord(req,res){
    Music.findByIdAndUpdate({_id: req.body._id}, req.body,{new:true},(err,doc)=>{
        if(!err){res.redirect('music/list');}
        else{
            if(err.name=='ValidationError'){
                handleValidationError(err,req.body);
                res.render("music/addOrEdit",{
                    viewTitle:'Update Music',
                    music:req.body
                });
            }
            else
            console.log('Error during record update:' + err);
        }
    });

}
router.get('/list',(req,res)=>{
    Music.find((err,docs)=>{
        if(!err){
            res.render("music/list",{
                list:docs
            });
        }
            else{

                  console.log('Error in retrieving music:' +err);

            }
         
    });
});

function handleValidationError(err, body){
    for (fild in err.errors){
        switch(err.errors[fild].path){
            case 'instrument':
                body['instrumentError']=err.errors[field].message;
                break;
            case 'price':
                body['priceError']=err.errors[field].message;
                default:
                break;

        }
    }
}

router.get('/:id',(req, res)=>{
    music.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("music/addOrEdit",{
                viewTitle:"Update Music",
                music:doc
            });
        }
    });
});

router.get('/delete/:id', (req,res)=>{
    Music.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){
            res.redirect('/music/list');

        }
        else{console.log('Error in music delete:', +err);}
    });
});
module.exports=router;