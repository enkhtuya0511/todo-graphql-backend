import { User } from "@/graphql/models/user-model";

export async function getAllUsers() {
  try {
    const users = await User.find({});
    console.log("users", users);
    return users;
  } catch (error) {
    console.error("error getting users: ", error);
  }
}
