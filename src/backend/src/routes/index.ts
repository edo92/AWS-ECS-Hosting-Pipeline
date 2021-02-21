import { Router } from "express";
import User from "../controllers";

const router = Router();

router.get("/getusers", User.getAllUsers);
router.post("/createuser", User.createUser);

export default router;
