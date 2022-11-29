import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React, { useState } from "react";
import "./Recomendaciones.css";

const Recomendaciones = () => {
  const [chunks, setChunks] = useState(["Nochunks"]);
  const [cityCode, setcityCode] = useState("MEX");
  const [travelerCountryCode, setTravelerCountryCode] = useState("FR");

  let formData = JSON.stringify({
    cityCodes: cityCode,
    travelerCountryCode: travelerCountryCode,
  });
  return (
    <div class="container-recomendaciones container">
      <div>
        <Navbar />
      </div>
      <div class="body-recomendaciones grid">
      <p class="text-recomendaciones">
        <h2>Te enseñamos a usar nuestro sistema de recomendacion <br /><br /></h2>
        
        Para hacer uso de esta API, requeriras investigar que son las siglas IATA, una vez entendido lo anterior ingresa en el campo de <b>lugar visitado</b> ingresa algun lugar que hayas visitado y en el campo <b>Lugar de Residencia</b> ingresa donde vives por ejemplo para Mexico (MEX). Una vez ingresado todo te daremos recomendaciones basada en tu ciudad de origen y lugares parecidos al visitado.
        </p>
        <ul class="nav-recomendaciones">
          <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
            <h class="titulos-recomendaciones">Lugar visitados</h>
            <div class="wrapper">
              <input
                placeholder="Visitados"
                class="input-recomendaciones"
                onChange={(event, value) => {
                  setcityCode(event.target.value);
                }}
                required
              />
              <div class="validation">*</div>
            </div>
          </li>
          <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
          <h class="titulos-recomendaciones">Lugar de Residencia</h>
            <div class="wrapper">
              <input
                placeholder="¿Dónde vives?"
                class="input-recomendaciones"
                onChange={(event, value) => {
                  setTravelerCountryCode(event.target.value);
                }}
                required
              />
              <div class="validation">*</div>
            </div>
          </li>
          <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
            <h1 class="h1-recomendaciones"><b>Lugares Recomendados</b></h1>
            {chunks.map((data) => (
              <p>{data["name"]}</p>
            ))}
          </li>
        </ul>
        <input class="btn"
          type="submit"
          onClick={(event, value) => {
            fetch(" http://127.0.0.1:7000/", {
              method: "POST",
              mode: "cors",
              headers: { "Content-Type": "application/json" },
              body: formData,
            }).then((response) => {
              response.json().then((data) => {
                setChunks(data);
              });
            });
          }}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Recomendaciones;
