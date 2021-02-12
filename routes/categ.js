const express=require('express');
const app=express();
const category=require('../models/category');
const product=require('../models/products');

const router=express.Router();

router.get('/',async (req,res)=>{
    try{
        const categoriesitem=await category.find();
        res.json(categoriesitem);
    }catch(err){
        res.json({message:err})

    }
})
router.get('/:Hero',async (req,res)=>{
    try{
        const proditem=await product.find({hero:req.params.Hero});
        // console.log("The hero "+req.params.Hero+"  "+proditem);
        res.json(proditem);
    }catch(err){
        res.json({message:err})

    }
})


router.post('/',async (req,res)=>{
    const categ=new category({ 
        title: req.body.title,
        hero: req.body.hero,
        image: req.body.image
    })

    try{
    const savedcateg =await categ.save();
    res.json(savedcateg);
    }catch(err){
        res.json({message:err})
    }
})


module.exports=router