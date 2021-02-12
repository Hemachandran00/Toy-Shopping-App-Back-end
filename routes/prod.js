const express=require('express');
const app=express();
const product=require('../models/products');


const router=express.Router();

router.get('/',async (req,res)=>{
    try{
        const proditem=await product.find();
        res.json(proditem);
    }catch(err){
        res.json({message:err})

    }
})
router.get('/:prodId',async (req,res)=>{
    console.log(req.params.prodId);
    try{
        const proditem=await product.find({prodid:req.params.prodId});
        console.log(proditem);
        res.json(proditem);
    }catch(err){
        res.json({message:err})

    }
})

router.post('/',async (req,res)=>{
    const prods=new product({ 
        prodid:req.body.prodid,
        title: req.body.title,
        hero: req.body.hero,
        image: req.body.image,
        price: req.body.price,
        description:req.body.description
    })

    try{
    const savedprod =await prods.save();
    res.json(savedprod);
    }catch(err){
        res.json({message:err})
    }
})


module.exports=router