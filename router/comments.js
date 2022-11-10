const express = require('express')
const router = express.Router();
const Comment = require('../schemas/comment')

router.post('/',async (req,res)=>{
    try{
        const comment = await Comment.create({
            commenter:req.body.id,
            comment:req.body.comment,
        });
        console.log(comment);
        const result = await Comment.populate(comment, {path:'commenter'});
        res.status(201).json(result)
    }catch(err){
        console.error(err);
    }
})

router.route('/:id')
.patch(async (req,res)=>{
    try{
        const result = await Comment.update({
            _id:req.params.id,
        },{
            comment:req.body.comment,
        });
        res.json(result);
    }catch(err){
        console.error(err);
    }
})
.delete(async (req,res)=>{
    try{
        const result = await Comment.remove({_id:req.params.id});
        res.json(result);
    }catch(err){
        console.error(err);
    }
})

module.exports = router;