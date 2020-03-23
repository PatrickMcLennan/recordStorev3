import express from "express";
import { ApolloServer, gql } from "apollo-server-micro";
import session, { SessionOptions } from "express-session";
import mongoose from "mongoose";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { typeDefs } from "./utils/queries";
import { resolvers } from "./utils/resolvers";

config();
const PORT: number = Number(process.env.PORT) || 4000;

const sessionOptions: SessionOptions = {
  resave: false,
  saveUninitialized: false,
  secret: "hello",
  cookie: {
    maxAge: 600000,
    secure: true
  }
};

const getConnection = async (): Promise<mongoose.Connection> =>
  await mongoose.createConnection(`${process.env.MONGO_URI}`, {
    bufferCommands: false, // Disable mongoose buffering
    bufferMaxEntries: 0, // and MongoDB driver buffering
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

const apolloServer: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => getConnection(),
  playground: true,
  introspection: true
});
apolloServer.createHandler({ path: "/api/graphql" });

const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session(sessionOptions));

app.listen(PORT, async () => {
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
});
