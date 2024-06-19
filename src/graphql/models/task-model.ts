import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  userId: String,
  subject: String,
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },
  task: String,
  priority: String,
});

export const TaskModel = mongoose.models?.task || mongoose.model("task", taskSchema);
