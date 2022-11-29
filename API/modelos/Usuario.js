import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    telefono: {
      type: String,
      required: true,
    },
    apellidoMaterno: {
      type: String,
      required: true,
    },
    apellidoPaterno: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: false,
    },
    carrito: {
      type: [String],
      required: false,
      unique:true
    },
  },
  { timestamps: true }
);

export default mongoose.model("Usuario", UsuarioSchema);
