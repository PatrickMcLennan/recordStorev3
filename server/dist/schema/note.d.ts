import { Document, SchemaDefinition } from "mongoose";
export interface INote extends Document {
    title: string;
    content: string;
    date: Date;
}
export declare const schema: SchemaDefinition;
declare const _default: import("graphql").DocumentNode;
export default _default;
