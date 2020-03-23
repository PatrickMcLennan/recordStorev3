import { gql } from "apollo-server-micro";
import { Document, Schema, SchemaDefinition, SchemaTypes } from "mongoose";

export interface INote extends Document {
  title: string;
  content: string;
  date: Date;
}

export const schema: SchemaDefinition = {
  title: {
    type: SchemaTypes.String,
    required: true
  },
  content: {
    type: SchemaTypes.String,
    required: true
  },
  date: {
    type: SchemaTypes.Date,
    required: true
  }
};

const collectionName: string = "note";

const noteSchema: Schema = new Schema(schema);

export default gql`
  type Note {
    _id: ID!
    title: String!
    content: String!
    date: DateTime!
  }
`;
