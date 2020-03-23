"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_micro_1 = require("apollo-server-micro");
exports.default = apollo_server_micro_1.gql `
  scalar Date
  scalar Time
  scalar DateTime
`;
