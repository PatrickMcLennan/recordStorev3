"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const name = "users";
const schema = {
    firstName: { type: mongoose_1.default.SchemaTypes.String, required: true },
    lastName: { type: mongoose_1.default.SchemaTypes.String, required: true },
    email: { type: mongoose_1.default.SchemaTypes.String, required: true },
    password: { type: mongoose_1.default.SchemaTypes.String, required: true }
};
const noteSchema = new mongoose_1.default.Schema(schema);
