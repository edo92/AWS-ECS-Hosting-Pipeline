import express from "express";
import router from "../routes";

class Server {
  public app = express.application;
  private port = 3001;

  constructor() {
    this.app = express();
    // this.bodyParser();
    this.useRouter();
  }

  private useRouter(): void {
    this.app.use("/", router);
  }

  // private bodyParser(): void {
  //   this.app.use(express.urlencoded());
  // }

  public start(): void {
    this.app.listen(this.port, (): void => {
      console.log("Server is listening");
    });
  }
}

export default Server;
