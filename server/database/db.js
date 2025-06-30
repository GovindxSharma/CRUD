import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load variables from .env

const Connection = async () => {
  const baseURI = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_NAME;

  const fullURI = `${baseURI}/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(fullURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
  }
};

export default Connection;
