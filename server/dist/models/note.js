"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_micro_1 = require("apollo-server-micro");
const mongoose_1 = require("mongoose");
exports.schema = {
    title: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    content: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    date: {
        type: mongoose_1.SchemaTypes.Date,
        required: true
    }
};
const collectionName = "note";
const noteSchema = new mongoose_1.Schema(exports.schema);
exports.default = apollo_server_micro_1.gql `
  type Note {
    _id: ID!
    title: String!
    content: String!
    date: DateTime!
  }
`;
