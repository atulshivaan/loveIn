import express from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.connection.js";
import cors from 'cors';
// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5174", credentials: true }));

// Routes
app.use("/api/auth", authRouter);
app.use("/",(req,res)=>{
    res.send("Welcome to the server")
})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

