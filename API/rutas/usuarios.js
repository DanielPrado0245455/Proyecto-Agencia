import express from "express";
import {
  allUsers,
  deleteUser,
  usuarioActualizado,
  usuarioObtenido,
} from "../controladores/usuario.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/VerifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Welcome");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Welcome user");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Welcome admin");
});

//UPDATE
router.put("/:id", usuarioActualizado);
//GET
router.get("/:id", verifyUser, usuarioObtenido);

router.delete("/:id", verifyUser, deleteUser);

router.get("/", verifyAdmin, allUsers);

export default router;
