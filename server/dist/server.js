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
const express_1 = __importDefault(require("express"));
const apollo_server_micro_1 = require("apollo-server-micro");
const express_session_1 = __importDefault(require("express-session"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const queries_1 = require("./utils/queries");
const resolvers_1 = require("./utils/resolvers");
dotenv_1.config();
const PORT = Number(process.env.PORT) || 4000;
const sessionOptions = {
    resave: false,
    saveUninitialized: false,
    secret: "hello",
    cookie: {
        maxAge: 600000,
        secure: true
    }
};
const getConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield mongoose_1.default.createConnection(`${process.env.MONGO_URI}`, {
        bufferCommands: false,
        bufferMaxEntries: 0,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
});
const apolloServer = new apollo_server_micro_1.ApolloServer({
    typeDefs: queries_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    context: () => __awaiter(void 0, void 0, void 0, function* () { return getConnection(); }),
    playground: true,
    introspection: true
});
apolloServer.createHandler({ path: "/api/graphql" });
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cookie_parser_1.default());
app.use(express_session_1.default(sessionOptions));
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
}));
