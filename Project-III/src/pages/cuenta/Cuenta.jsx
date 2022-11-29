import "./Cuenta.css";
import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


const Cuenta = () => {
  const { user} = useContext(AuthContext);
  const [usuario, setUsuario] = useState({
    nombre: user.nombre,
    email: user.email,
    telefono: user.telefono,
    apellidoMaterno: user.apellidoMaterno,
    apellidoPaterno: user.apellidoPaterno,
    direccion: user.direccion,
  });
console.log(usuario)
const handleChange = (e) => {
  setUsuario((prev) => ({ ...prev, [e.target.id]: e.target.value }));
};
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/api/usuarios/" + user._id,usuario)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="container-cuenta container">
      <div>
        <Navbar />
      </div>
      <div class="container">
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Mis Tickets</span>
              <span class="badge bg-primary rounded-pill">{user.carrito.length}</span>
            </h4>
            <ul class="list-group mb-3">
              {user.carrito.map((carrito, e) => {
                return (
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0 h6-cuenta">{carrito}</h6>
                      <small class="text-muted">Compra: Vuelo</small>
                    </div>
                    <span class="text-muted"></span>
                  </li>
                );
              })}
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${(user.carrito.length)*700}</strong>
              </li>
            </ul>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3 h4-cuenta">Datos de cuenta</h4>
            <form class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-sm-6">
                  <div class="container-cuenta-editar">
                    <label for="firstName" class="form-label">
                      Nombres
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre"
                      placeholder={user.nombre}
                      onChange={handleChange}
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="container-cuenta-editar">
                    <label for="lastName" class="form-label">
                      Apellido Materno
                    </label>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="apellidoMaterno"
                    placeholder={user.apellidoMaterno}
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">Validar Apellido Paterno</div>
                </div>

                <div class="col-sm-6">
                  <div class="container-cuenta-editar">
                    <label for="firstName" class="form-label">
                      Apellido Paterno
                    </label>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="apellidoPaterno"
                    placeholder={user.apellidoPaterno}
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">Validar Apellido Paterno</div>
                </div>

                <div class="col-sm-6">
                  <div class="container-cuenta-editar">
                    <label for="tel" class="form-label">
                      Teléfono
                    </label>
                  </div>
                  <input
                    type="tel"
                    class="form-control"
                    id="telefono"
                    placeholder={user.telefono}
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">Validar Apellido Paterno</div>
                </div>
                <div class="col-12">
                  <div class="container-cuenta-editar">
                    <label for="email" class="form-label">
                      Email
                    </label>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder={user.email}
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <div class="container-cuenta-editar">
                    <label for="address" class="form-label">
                      Dirección
                    </label>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="direccion"
                    placeholder={user.direccion}
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
              </div>

              <button class="w-100 btn btn-primary btn-lg" type="submit" onClick={handleClick}>
                Confirmar editado
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="container">
        <Footer />
      </div>
    </div>
  );
};

export default Cuenta;
