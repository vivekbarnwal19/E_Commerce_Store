import express from "express";
import { 
         createProduct, 
         deleteProduct, 
         getAllProducts ,
         getFeaturedProducts, 
         getProductsByCatagory, 
         getRecommendedProducts, 
         toggleFeaturedProduct
        
        } from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/",protectRoute , adminRoute, getAllProducts)
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCatagory);
router.get("/recommendations", getRecommendedProducts);
router.post("/",protectRoute, adminRoute, createProduct);
router.patch("/:id",protectRoute , adminRoute , toggleFeaturedProduct)
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;