import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Vuelos.css";
import Volaris from "./img/volaris.jpg";
import imgaero from "./img/aeromexico.png"
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Vuelos = () => {
  const vuelo = [
    {
      id: 1,
      destino: "Bogota",
      aerolinea: "Volaris",
      vuelo: "1A",
      hora: "17:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: Volaris,
    },
    {
      id: 2,
      destino: "Singapur",
      aerolinea: "Volaris",
      vuelo: "2A",
      hora: "11:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: Volaris,
    },
    {
      id: 3,
      destino: "Peru",
      aerolinea: "Aeromexico",
      vuelo: "3A",
      hora: "1:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: imgaero,
    },
    {
      id: 5,
      destino: "Cartagena",
      aerolinea: "Aeromexico",
      vuelo: "5A",
      hora: "1:00am",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: imgaero,
    },
    {
      id: 4,
      destino: "Alaska",
      aerolinea: "Aeromexico",
      vuelo: "4A",
      hora: "17:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: imgaero,
    },
    {
      id: 8,
      destino: "Buenos Aires",
      aerolinea: "Aeromexico",
      vuelo: "8A",
      hora: "17:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: imgaero,
    },
  ];
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { user } = useContext(AuthContext);
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  console.log(vuelo[0]);
  const buyFlights = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:5000/api/vuelos/" + user._id;
      selectedRooms.forEach((element) => axios.post(url, vuelo[element]));
      navigate("/cuenta");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="container">
    <>
      <Navbar />
      <div class="table-resposive body-tabla">
        <h1 class="h1-tabla">Vuelos Disponibles</h1>
      <table class="table align-middle">
        <thead class="titulos-tabla">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Aerolinea</th>
            <th scope="col">Destino </th>
            <th scope="col">ID Vuelo</th>
            <th scope="col">Hora</th>
            <th scope="col">Disponibilidad</th>
            <th scope="col">Fecha</th>
            <th scope="col"></th>
            <th scope="col">Agregar</th>
          </tr>
        </thead>
        {vuelo.map((carrito, e) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{carrito.id}</th>
                  <td>{carrito.aerolinea}</td>
                  <td>{carrito.destino}</td>
                  <td>{carrito.vuelo}</td>
                  <td>{carrito.hora}</td>
                  <td>{carrito.estatus}</td>
                  <td>{carrito.fecha}</td>
                  <td><img src={(carrito.img)} alt="" /></td>
                  <td>
                    <input
                      type="checkbox"
                      value={carrito.id}
                      onChange={handleSelect}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      </div>
      <button class="btn" onClick={buyFlights}>Agregar</button>
      <div class="container">
        <Footer />
      </div>
    </>
    </div>
  );
};

export default Vuelos;
