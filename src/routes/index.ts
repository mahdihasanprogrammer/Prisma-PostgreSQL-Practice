import { Router } from "express";
import productsRouter from "../services/products";


const router = Router();

router.use("/products", productsRouter)

export default router;