"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_micro_1 = require("apollo-server-micro");
const note_1 = __importDefault(require("./note"));
const custom_1 = __importDefault(require("./custom"));
const linkSchema = apollo_server_micro_1.gql `
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;
exports.default = [linkSchema, note_1.default, custom_1.default];
