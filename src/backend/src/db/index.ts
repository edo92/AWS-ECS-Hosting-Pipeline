import mongoose from "mongoose";
import logger from "../libs/logger";

// Interface
interface IDatabase {
  disconnect: () => void;
  connect: () => void;
}

class Database implements IDatabase {
  private mongoUri: string = process.env.MONGO_URI || "";

  public async disconnect(): Promise<void> {
    try {
      await mongoose.connection.close();
    } catch (err) {
      return err;
    }
  }

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(this.mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });

      logger.print({
        text: "mongoose Connection Started",
        visible: Boolean(process.env.DEV_ENV),
      });
    } catch (err) {
      return err;
    }
  }
}

export default Database;
