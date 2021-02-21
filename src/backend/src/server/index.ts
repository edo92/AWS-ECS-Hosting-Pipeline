import express from "express";
import routes from "../routes";
import logger from "../libs/logger";
import * as middleware from "../helpers/middlewares";

interface IServer {
  app: express.Application;
  start: () => void;
}

class Server implements IServer {
  public app = express.application;
  private port = 3001;

  constructor() {
    this.app = express();
    this.middlewares();
    this.parser();
    this.router();
  }

  private router(): void {
    this.app.use("/", routes);
  }

  private middlewares(): void {
    middleware.headers(this.app);
  }

  private parser(): void {
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: false,
      })
    );
  }

  public start(): void {
    this.app.listen(this.port, (): void => {
      logger.print({
        text: `Server is runing on port ${this.port}`,
        visible: Boolean(process.env.DEV_ENV),
      });
    });
  }
}

export default Server;
