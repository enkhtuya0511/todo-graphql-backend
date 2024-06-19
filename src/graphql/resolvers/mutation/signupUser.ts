import { User } from "@/graphql/models/user-model";
import { NewUserInput } from "@/graphql/generated/client";
import bcrypt from "bcrypt";

export async function signupUser(parent: any, { input }: { input: NewUserInput }) {
  try {
    const { password, username, email } = input;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return newUser;
  } catch (error) {
    console.error("error creating new user: ", error);
    return error;
  }
}
