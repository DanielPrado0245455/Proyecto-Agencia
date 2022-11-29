import express from "express";
import {
  allHotels,
  countByCity,
  countByType,
  deleteHotel,
  getHotel,
  hotelActualizado,
  hotelCreado,
} from "../controladores/hotel.js";
import { verifyAdmin } from "../utils/VerifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, hotelCreado);
//UPDATE
router.put("/:id", verifyAdmin, hotelActualizado);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", allHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);


export default router;
