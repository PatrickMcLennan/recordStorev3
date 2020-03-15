import { FieldError, NestDataObject } from "react-hook-form";

// - Labels / Text Inputs - //
export interface ILabelProps {
  error:
    | FieldError
    | FieldError[]
    | NestDataObject<any>
    | NestDataObject<any>[];
}

export interface IApiSong {
  artist: string;
  id: number;
  title: string;
}

// - User - //
export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  notifications: INotification[];
  playlists: any[];
}

// - Notifications - //
export interface INotification {
  from: IUser;
  message: string;
  link: string;
}
