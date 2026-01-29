import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
      throw new Error("Missing MongoDB environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
