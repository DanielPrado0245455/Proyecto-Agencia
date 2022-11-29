import Usuario from "../modelos/Usuario.js";

export const usuarioActualizado = async (req, res, next) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(usuarioActualizado);
  } catch (err) {
    next(err);
  }
};

export const usuarioObtenido = async (req, res, next) => {
  try {
    const user = await Usuario.findByIdAndUpdate(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await Usuario.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "User has been deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export const allUsers = async (req, res, next) => {
  try {
    const users = await Usuario.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
