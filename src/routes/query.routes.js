import { Router } from "express";
import { postQuery } from "../controllers/query.controller.js";

const router = Router();
router.post("/postquery", postQuery);

export default router;