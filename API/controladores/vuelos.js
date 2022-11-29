import Usuario from "../modelos/Usuario.js";

export const agregarVuelo = async (req, res, next) => {
  const usuario = req.params.idusuario;
  const vueloNuevo = req.body.vuelo

    try {
      await Usuario.findByIdAndUpdate(usuario, {
        $push: { carrito: vueloNuevo },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(vueloNuevo);
};
