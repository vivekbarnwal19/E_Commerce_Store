import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        min: 0,
        required: true,
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    catagory: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    
},
{ timestamps : true }

);
const Product = mongoose.model("Product", productSchema);

export default Product;