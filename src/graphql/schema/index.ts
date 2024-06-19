import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "./user.typeDef";
import { taskTypeDefs } from "./task.typeDef";

const mergedTypeDefs = mergeTypeDefs([userTypeDefs, taskTypeDefs]);

export default mergedTypeDefs;
