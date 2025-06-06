import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js'
import productRoutes from './routes/product.route.js'
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); //Allows you to parse the body of the request
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes)

app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:" + PORT);

    connectDB();
})