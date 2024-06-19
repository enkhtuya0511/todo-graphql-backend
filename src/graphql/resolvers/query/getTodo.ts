import { TaskModel } from "@/graphql/models/task-model";
import { QueryGetTodoArgs } from "@/graphql/generated/client";

export async function getTodo(parent: any, { taskId }: { taskId: QueryGetTodoArgs }) {
  try {
    const task = await TaskModel.findById(taskId);
    if (!task) return;

    return task;
  } catch (err) {
    return err;
  }
}
