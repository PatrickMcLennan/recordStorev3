import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const name: string = "users";

const schema: mongoose.SchemaDefinition = {
  firstName: { type: mongoose.SchemaTypes.String, required: true },
  lastName: { type: mongoose.SchemaTypes.String, required: true },
  email: { type: mongoose.SchemaTypes.String, required: true },
  password: { type: mongoose.SchemaTypes.String, required: true }
};

const noteSchema: mongoose.Schema = new mongoose.Schema(schema);
