import { User } from "../../db/schemas";

interface IUser {
  name: string;
}

interface IUserlist {
  _id?: string;
  name?: string;
}

class UserDb {
  public static async findAllUsers(): Promise<IUserlist[]> {
    try {
      return await User.find();
    } catch (err) {
      return err;
    }
  }

  public static async createUser(user: IUser): Promise<void> {
    try {
      await User.create(user);
    } catch (err) {
      throw err;
    }
  }
}

export default UserDb;
