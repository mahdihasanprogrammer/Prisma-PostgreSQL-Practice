import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index";
dotenv.config();

const app = express()


// middlewares;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/", router)


app.get('/', (req:Request, res: Response) =>{
    console.log("Check Env URL:", process.env.DATABASE_URL);
    res.send({
        success: true,
        message: "server is running successfully"
    })
})

export default app;