import express from 'express';
import dotenv from  'dotenv'
import {connectDB} from './config/db.js'

import productRoutes from "./routes/product.route.js"

// used for accessing env variables . 
// without this method we print env variables as undefined
dotenv.config()

const app = express();

// middleware that allows us to accept json in req.body
app.use(express.json()); 

app.use("/api/products",productRoutes)


app.listen(5000,()=>{
    connectDB()
    console.log("server started at http://localhost:5000");
})

