import mongoose from "mongoose";

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Await the mongoose connection
        const connection = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected successfully: ${connection.connection.host}:${connection.connection.port}`);

    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);  // Exit the process with failure code
    }
};

export default connectDB;
