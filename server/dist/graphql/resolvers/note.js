"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const note_1 = __importDefault(require("../../database/models/note"));
const apollo_server_micro_1 = require("apollo-server-micro");
exports.default = {
    Query: {
        getAllNotes: (_parent, _args, context) => __awaiter(void 0, void 0, void 0, function* () {
            const Note = note_1.default(context);
            let list;
            try {
                list = yield Note.find().exec();
            }
            catch (error) {
                console.error(`getAllNotes error: ${error}`);
                return new apollo_server_micro_1.ApolloError(`Error with getAllNotes`);
            }
            return list;
        }),
        getNote: (_parent, { _id }, connection) => __awaiter(void 0, void 0, void 0, function* () {
            const Note = note_1.default(connection);
            try {
                const note = Note.findById(_id).exec();
                return note;
            }
            catch (error) {
                console.error(`getNote Error: ${error}`);
                return new apollo_server_micro_1.ApolloError(`Error with getNote`);
            }
        })
    }
};
