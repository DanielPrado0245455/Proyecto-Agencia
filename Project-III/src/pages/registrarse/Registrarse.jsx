import "./Registrarse.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registrarse = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    apellidoMaterno: "",
    apellidoPaterno: "",
    password: "",
    direccion: "",
  });
  const handleChange = (e) => {
    setUsuario((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/autenticacion/register", usuario);
      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <html class="html-registro">
      <body class="body-registro">
        <div class="form-registro">
          <span class="form__title">Registrarse</span>
          <form action="" class="row">
            <div class="input-group-registro">
              <input
                type="text"
                id="nombre"
                onChange={handleChange}
                required
                class="input"
              />
              <span class="bar"></span>
              <label for="name" class="input-label">
                Nombre(s)
              </label>
            </div>
            <div class="input-group-registro">
              <input
                type="text"
                id="email"
                onChange={handleChange}
                required
                class="input"
              />
              <span class="bar"></span>
              <label for="email" class="input-label">
                Email
              </label>
            </div>
            <div class="input-group-registro">
              <input
                type="text"
                id="apellidoMaterno"
                onChange={handleChange}
                required
                class="input"
              />
              <span class="bar"></span>
              <label for="name" class="input-label">
                Apellido Materno
              </label>
            </div>
            <div class="input-group-registro">
              <input
                type="tel"
                id="telefono"
                onChange={handleChange}
                required
                class="input"
              />
              <span class="bar"></span>
              <label for="tel" class="input-label">
                Teléfono
              </label>
            </div>
            <div class="input-group-registro">
              <input
                type="text"
                id="apellidoPaterno"
                onChange={handleChange}
                required
                class="input"
              />
              <span class="bar"></span>
              <label for="name" class="input-label">
                Apellido Paterno
              </label>
            </div>
            <div class="input-group-registro">
              <input
                type="password"
                id="password"
                onChange={handleChange}
                required
                class="input"
              />
              <span class="bar"></span>
              <label for="password" class="input-label">
                Contraseña
              </label>
            </div>
            <div class="input-group-registro">
              <input
                type="text"
                id="direccion"
                onChange={handleChange}
                required
                class="input"
              />
              <span class="bar"></span>
              <label for="name" class="input-label">
                Dirección
              </label>
            </div>
            <button
              type="submit"
              class="form__button-registro"
              onClick={handleClick}
            >
              Registrarse
            </button>
            <span class="form__switch-registro">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/" class="link_login">
                Iniciar sesión
              </Link>
            </span>
          </form>
        </div>
      </body>
    </html>
  );
};

export default Registrarse;
