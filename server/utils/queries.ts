import { buildSchema } from "graphql";

export const typeDefs: any = buildSchema(`
  type Query {
    hello: String
  }
`);
