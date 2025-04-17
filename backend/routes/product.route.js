import express from 'express'
import mongoose from 'mongoose'

import { getProducts,createProduct,updateProduct,deleteProduct} from '../contorllers/product.controller.js';

const router = express.Router();


//getting all products
router.get("/" , getProducts)

//adding a new product
router.post("/",createProduct)

//updating a product
router.put("/:id", updateProduct)

// deleting a product
router.delete("/:id" , deleteProduct)

export default router;