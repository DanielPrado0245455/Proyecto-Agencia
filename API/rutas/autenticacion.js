import express from "express";
import { login, registro } from "../controladores/validacion.js";

const router = express.Router();

router.post("/register", registro);
router.post("/login", login);

export default router;
