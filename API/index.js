import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import rutaAutenticacion from "./rutas/autenticacion.js";
import rutaUsuarios from "./rutas/usuarios.js";
import rutaHoteles from "./rutas/hoteles.js";
import rutaVuelos from "./rutas/vuelos.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors())


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Conexion con mongoDB al 100");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Perdimos la conexion con MongoDB");
});
mongoose.connection.on("connected", () => {
  console.log("Hay conexion con MongoDB");
});

app.use(cookieParser());
app.use(express.json());

app.use("/api/autenticacion",rutaAutenticacion);
app.use("/api/usuarios", rutaUsuarios);
app.use("/api/hoteles", rutaHoteles);
app.use("/api/vuelos", rutaVuelos);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage =
    err.message ||
    "For some unknown reason this is not working, lo siento papu";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log("Le metí el cable al port 5000");
});
