import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB as string, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
