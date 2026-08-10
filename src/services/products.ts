import { Request, Response, Router } from "express";
import prisma from "../lib/prisma";

const productsRouter = Router();

productsRouter.post("/", async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const product = await prisma.product.create({
            data: productData
        });
        res.json({
            success: true,
            message: "Product created successfully",
            data: product
        })
    } catch (error) {
        console.error("Create product error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to create product",
            error: error instanceof Error ? error.message : error,
        });
    }
})

export default productsRouter;