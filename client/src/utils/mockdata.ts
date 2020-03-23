import { IUser } from "dictionary";

export const mockUsers: IUser[] = Array.from({ length: 40 }, () => null).map(
  (_: null, i: number): IUser => ({
    email: `user-${i}@user.com`,
    firstName: `First ${i}`,
    lastName: `Last ${i}`,
    playlists: []
  })
);
