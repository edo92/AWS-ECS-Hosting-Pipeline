import express from "express";

type Req = express.Request;
type Res = express.Response;
type Next = express.NextFunction;

const headers = (_: Req, res: Res, next: Next): void => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  next();
};

export default headers;
