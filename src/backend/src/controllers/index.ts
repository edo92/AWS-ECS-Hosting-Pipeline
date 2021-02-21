import express from "express";
import controller from "../db/actions";

type PromiseVoid = Promise<void>;
type Req = express.Request;
type Res = express.Response;
type Next = express.NextFunction;

class User {
  public static async getAllUsers(_: Req, res: Res, next: Next): PromiseVoid {
    try {
      const allUsers = await controller.findAllUsers();
      res.status(200).json(allUsers);
    } catch (err) {
      next();
    }
  }

  public static async createUser(req: Req, res: Res, next: Next): PromiseVoid {
    try {
      await controller.createUser(req.body.userForm);
      const allUsres = await controller.findAllUsers();
      res.status(200).json(allUsres);
    } catch (err) {
      next();
    }
  }
}

export default User;
