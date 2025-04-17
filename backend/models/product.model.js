import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
},{
    timestamps:true //cretedat and updatedat is recorded
});

const Product = mongoose.model('Product',productSchema)
//'Product' will be automatically converted in to products by mongoose

export default Product;