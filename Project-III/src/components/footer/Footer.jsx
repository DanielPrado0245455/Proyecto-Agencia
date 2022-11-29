import "./Footer.css";
import Icons from "../icons_social/Icons";
import Logo from "./img/agencia-de-viajes.png";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
    return(
        <html class="html-footer">
            <body class="body-footer">
                <div class="border-top">
                    <footer class="py-2 my-3">
                        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                            <li class="nav-item"><Link to="/home" class="nav-link px-2 text-muted">M.E. Travel</Link></li>
                            <li class="nav-item"><Link to="/vuelos" class="nav-link px-2 text-muted">Vuelos</Link></li>
                            <li class="nav-item"><Link to="/hoteles" class="nav-link px-2 text-muted">Hoteles</Link></li>
                            <li class="nav-item"><Link to="/recomendaciones" class="nav-link px-2 text-muted">Recomendaciones</Link></li>
                            <li class="nav-item"><Link to="/cuenta" class="nav-link px-2 text-muted">Sesión</Link></li>
                        </ul>
                        <div class="col-md-4 d-flex align-items-center">
                            <a href="/home" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <img src={Logo} alt=""></img>
                            </a>
                            <span class="mb-3 mb-md-0 text-muted">&copy; 2022 M.E. Travel, Inc</span>
                        </div>
                        <ul>
                            <Icons/>
                        </ul>        
                    </footer>
                </div>
            </body>
        </html>
    )
}

export default Footer