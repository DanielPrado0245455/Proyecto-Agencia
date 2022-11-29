import "./Carrousel.css";
import Rusia from "./img/Rusia.jpg";
import Italia from "./img/Italia.jpg";
import Mexico from "./img/Mexico.jpg";
import Francia from "./img/Francia.jpg";
import Colombia from "./img/colombia.jpg";
import Argentina from "./img/Argentina.jpg";
import España from "./img/Espana.jpg";


const Carrousel = () => {
    return(
        <body class="body-carrousell">
            <div id="carouselExampleCaptions" class="carousel slide contenido" data-bs-ride="false">
                <div class="carousel-inner carrousell">
                    <div class="carousel-item active">
                        <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell1">
                        <img src={Rusia} alt=""/>
                        <div class="content">
                            <a href="#1"><button>Rusia</button></a>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell2">
                        <img src={Mexico} alt=""/>
                        <div class="content">
                            <a href="#2"><button>México</button></a>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell3">
                        <img src={Francia} alt=""/>
                        <div class="content">
                            <a href="#3"><button>Francia</button></a>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell4">
                        <img src={Italia} alt=""/>
                        <div class="content">
                            <a href="#4"><button>Italia</button></a>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell5">
                        <img src={Colombia} alt=""/>
                        <div class="content">
                            <a href="#5"><button>Colombia</button></a>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell6">
                        <img src={Argentina} alt=""/>
                        <div class="content">
                            <a href="#6"><button>Argentina</button></a>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell7">
                        <img src={España} alt=""/>
                        <div class="content">
                            <a href="#7"><button>España</button></a>
                        </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            
        </body>
    )
}

export default Carrousel