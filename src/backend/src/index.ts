import Server from "./server";
import Mongdb from "./db";

new Mongdb().connect();
new Server().start();
