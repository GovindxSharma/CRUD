import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const Connection = async () => {
    const MONGODB_URI = process.env.MONGODB_URI;

    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Error connecting to the database:", error);
    }
};

export default Connection;
