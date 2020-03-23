import { gql } from "apollo-server-express";

export const resolvers = {
  getUsers: () => console.log("hell"),
  hello: (): string => `hello world`
};
