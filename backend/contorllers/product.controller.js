import mongoose from 'mongoose'
import Product from '../models/product.model.js'

export const getProducts = async(req,res)=>{
    try{
        //find({}) - gets all docs
        const products = await Product.find({})
        res.status(200).json({success:true,data:products})
    }catch(error){
        console.error("Error in fetching all Products ", error.message)
        res.status(404).json({success:false,message:"error fetching all products"})
    }
}

export const createProduct =async (req,res)=>{
    const product = req.body; //user will send this data
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message:"Please provide all fields"})
    }

    const newProduct = new Product(product) 

    try{
        await newProduct.save()
        res.status(201).json({success:true,data:newProduct}) //201 is for when someting is created
    }catch(error){
        console.error("Error in Create Product ", error.message)
        res.status(500).json({success:false,message:"server error in creating product"})
    }
}

export const updateProduct =async (req,res)=>{
    const {id} = req.params
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"product id is invalid"})
    }  
    try{
        const updated = await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({success:true,data:updated})
    }catch(error){
        console.error("Error in updating Product ", error.message)
        res.status(404).json({success:false,message:"product not found"})
    }
}

export const deleteProduct =async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"product id is invalid"})
    }

    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"deleted item"})
    }catch(error){
        console.error("Error in delete Product ", error.message)
        res.status(500).json({success:false,message:"server error"})
    }
}