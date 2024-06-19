import { TaskModel } from "@/graphql/models/task-model";
import { MutationDeleteTaskArgs } from "@/graphql/generated/client";

export async function deleteTask(parent: any, { taskId }: { taskId: MutationDeleteTaskArgs }) {
  try {
    const deletedTask = await TaskModel.findByIdAndDelete(taskId);

    return deletedTask;
  } catch (error) {
    console.error("error deleting task: ", error);
    return error;
  }
}
