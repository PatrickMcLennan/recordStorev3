import mongoose from "mongoose";
import { ApolloError } from "apollo-server-micro";
declare const _default: {
    Query: {
        getAllNotes: (_parent: any, _args: any, context: mongoose.Connection) => Promise<ApolloError | any[]>;
        getNote: (_parent: any, { _id }: {
            _id: any;
        }, connection: mongoose.Connection) => Promise<any>;
    };
};
export default _default;
