"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_iso_date_1 = require("graphql-iso-date");
exports.default = {
    Date: graphql_iso_date_1.GraphQLDate,
    Time: graphql_iso_date_1.GraphQLTime,
    DateTime: graphql_iso_date_1.GraphQLDateTime
};
