import { Router } from "express";
import { User } from "../controllers";

const router = Router();

router.get("/getdata", User.getUserData);

export default router;
