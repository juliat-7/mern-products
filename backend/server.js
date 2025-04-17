import express from 'express';
import dotenv from  'dotenv'
import {connectDB} from './config/db.js'
import Product from './models/product.model.js';
import mongoose from 'mongoose'

// used for accessing env variables . 
// without this method we print env variables as undefined
dotenv.config()

const app = express();

// middleware that allows us to accept json in req.body
app.use(express.json()); 

//getting all products
app.get("/api/products" , async(req,res)=>{
    try{
        //find({}) - gets all docs
        const products = await Product.find({})
        res.status(200).json({success:true,data:products})
    }catch(error){
        console.error("Error in fetching all Products ", error.message)
        res.status(404).json({success:false,message:"error fetching all products"})
    }
})

//adding a new product
app.post("/api/products",async (req,res)=>{
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
})
//updating a product
app.put("/api/products/:id",async (req,res)=>{
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
})
// deleting a product
app.delete("/api/products/:id" , async (req,res) =>{
    const {id} = req.params

    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"deleted item"})
    }catch(error){
        console.error("Error in delete Product ", error.message)
        res.status(500).json({success:false,message:"server error"})
    }
})


app.listen(5000,()=>{
    connectDB()
    console.log("server started at http://localhost:5000");
})

