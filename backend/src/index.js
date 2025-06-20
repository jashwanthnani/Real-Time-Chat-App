import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI;

app.use("/api/auth", authRoutes);    

app.listen(PORT, () => {    
    console.log("server is running on port PORT:" + PORT);
    connectDB()
})  