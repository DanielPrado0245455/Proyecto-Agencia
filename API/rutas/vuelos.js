import express from "express";
import { agregarVuelo } from "../controladores/vuelos.js";


const router = express.Router();

router.post("/:idusuario", agregarVuelo);

export default router;
