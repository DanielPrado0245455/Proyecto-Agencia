import express from "express";
import {
  allRooms,
  createRoom,
  deleteRoom,
  getRoom,
  updatedRoom,
} from "../controladores/room.js";
import { verifyAdmin } from "../utils/VerifyToken.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);

router.put("/:id", verifyAdmin, updatedRoom);

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

router.get("/:id", verifyAdmin, getRoom);

router.get("/", verifyAdmin, allRooms);

export default router;
