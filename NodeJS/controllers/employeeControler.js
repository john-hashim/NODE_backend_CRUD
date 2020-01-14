const express=require('express');
var router=express.Router();
var Employee=require('../models/employee');
var objectId=require('mongoose').Types.ObjectId;

router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('error in retriving data'); 
        }
    });
});

router.post('/',(req,res)=>{
        var emp=new Employee({
            name:req.body.name,
            position:req.body.position,
            office:req.body.position,
            salary:req.body.salary
        });
        emp.save((err,doc)=>{
            if(!err){res.json(doc)}
            else{
                console.log('Error in employee saving');
            }
        });
});

router.get('/:id',(req,res)=>{
        if(!objectId.isValid(req.params.id)){
            return res.status(400).send('id is not valid');
        }
        Employee.findById(req.params.id,(err,doc)=>{
            if(!err){res.send(doc)}
            else{
                console.log('error in retriving employee'); 
            }
        }); 
});
router.put('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        res.status(400).send("There is no such id");
    }
    var emp={
        name:req.body.name,
        position:req.body.position,
        office:req.body.officem,
        salary:req.body.salary
    }
    Employee.findByIdAndUpdate(req.params.id,{ $set:emp },{new:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Errors in employee update');
        }

    })
});

router.delete('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        console.log('given id is not valid');
    }
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('error in deleting employee')
        }
    })
});


module.exports=router
