import "./Inicio_sesion.css";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Iniciar_sesion = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const { user, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/autenticacion/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/home")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

console.log(user)

  return (
    <html>
      <body class="body-inicio">
        <div class="form">
          <span class="form__title">Iniciar sesión</span>
          <form action="">
            <div class="input-group">
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
            <div class="input-group">
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
              <button onClick={handleClick} class="form__button">
                Iniciar sesión
              </button>
              {error && <span>{error.message}</span>}
            <span class="form__switch">
              ¿Aún no tienes cuenta?{" "}
              <Link to="/Registrarse" class="link_login">
                Registrarse
              </Link>
            </span>
          </form>
        </div>
      </body>
    </html>
  );
};

export default Iniciar_sesion;
