import express from "express";

class User {
  public static getUserData(_: express.Request, res: express.Response) {
    res.status(200).json({ success: "hello world" });
  }
}

export { User };
