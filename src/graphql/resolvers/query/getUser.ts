// import { User } from "@/graphql/models/user-model";
// import jwt from "jsonwebtoken";

// export async function getUser(parent: any, { token }: { token: string }) {
//   try {
//     interface JwtPayload {
//       userId: string;
//       email: string;
//     }
//     const { userId, email } = jwt.verify(
//       token,
//       "TodoListSecretKey"
//     ) as JwtPayload;
//     console.log("decoded", userId, email);
//     const user = await User.findById(userId);
//     return user;
//   } catch (error) {
//     console.error("Error during getting user by id: ", error);
//     return error;
//   }
// }
