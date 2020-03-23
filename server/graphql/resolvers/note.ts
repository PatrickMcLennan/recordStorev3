import mongoose, { Connection, Model } from "mongoose";
import dayjs from "dayjs";
import NoteModel, { INote } from "../../database/models/note";
import { ApolloError } from "apollo-server-micro";

export default {
  Query: {
    getAllNotes: async (_parent: any, _args: any, context: Connection): Promise<INote[] | ApolloError> => {
      const Note: Model<INote> = NoteModel(context);
      let list: INote[];
      try {
        list = await Note.find().exec();
      } catch (error) {
        console.error(`getAllNotes error: ${error}`);
        return new ApolloError(`Error with getAllNotes`);
      }
      return list;
    },

    getNote: async (_parent: any, { _id }: { _id: INote["_id"] }, connection: Connection): Promise<INote> => {
      const Note: Model<INote> = NoteModel(connection);

      try {
        const note = Note.findById(_id).exec();
        return note;
      } catch (error) {
        console.error(`getNote Error: ${error}`);
        return new ApolloError(`Error with getNote`);
      }
    }
  }
};
