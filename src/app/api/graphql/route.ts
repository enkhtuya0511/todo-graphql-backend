import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { resolvers } from "@/graphql/resolvers";
import mergedTypeDefs from "@/graphql/schema";
import { connectDB } from "@/utils/mongo-db";

async function main() {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

main();

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers,
  introspection: true,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
