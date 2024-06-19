import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type user {
    _id: String!
    username: String
    email: String!
    password: String!
  }

  type authUser {
    token: String
  }

  type Query {
    getAllUsers: [user]!
    # getUser(userId: String): user!
    getUser(token: String): user!
  }

  input newUserInput {
    username: String
    email: String!
    password: String!
  }
  input loginInput {
    email: String!
    password: String!
  }

  type Mutation {
    signupUser(input: newUserInput!): user!
    loginUser(input: loginInput!): user!
  }
`;
