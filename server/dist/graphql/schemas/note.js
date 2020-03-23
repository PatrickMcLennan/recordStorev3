"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_micro_1 = require("apollo-server-micro");
exports.default = apollo_server_micro_1.gql `
  extend type Mutation {
    saveNote(title: String!, content: String!): Note!
    deleteNote(_id: ID!): Note
  }

  extend type Query {
    getAllNotes: [Note!]
    getNote(_id: ID!): Note
  }

  type Note {
    _id: ID!
    title: String!
    content: String!
    date: DateTime!
  }
`;
