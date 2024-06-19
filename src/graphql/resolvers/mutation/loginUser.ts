import { User } from "@/graphql/models/user-model";
import { LoginInput } from "@/graphql/generated/client";
import bcrypt from "bcrypt";

export async function loginUser(parent: any, { input }: { input: LoginInput }) {
  try {
    console.log("login");
    const { password, email } = input;
    const user = await User.findOne({ email });
    console.log("user", user);
    const validPassword = await bcrypt.compare(password, user.password);
    if (!user || !validPassword) return;
    console.log("aaa", validPassword);

    console.log("login data", user);
    return user;
  } catch (error) {
    console.error("Error during login: ", error);
    return error;
  }
}
