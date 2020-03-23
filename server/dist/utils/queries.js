"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.typeDefs = graphql_1.buildSchema(`
  type Query {
    hello: String
  }
`);
