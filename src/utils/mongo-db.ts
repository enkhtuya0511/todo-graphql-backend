import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://enkhtuyab511:todo-graphql0@cluster0.6mptwlc.mongodb.net/`, {
      serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
