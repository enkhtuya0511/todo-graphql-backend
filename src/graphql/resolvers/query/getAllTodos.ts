import { TaskModel } from "@/graphql/models/task-model";

export async function getAllTodos(parent: any, { userId }: { userId: string }) {
  try {
    console.log("userId", userId);
    const filteredTodos = await TaskModel.find({ userId });
    console.log("filteredTodos", filteredTodos);
    return filteredTodos;
  } catch (err) {
    return err;
  }
}
