import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
let url ="";

const Home = () => {
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div class="home">
                <section class="hero section-home">
                    <div class="bkg-img" style={{ backgroundImage: `url(${require("./img/background.jpg")})` }}></div>
                    <div class="hero-content">
                        <h1 class="h1-home">M.E. Travel</h1>
                        <h3 class="h3-home">Viaje más allá de tus sueños</h3>
                        <a href={url} class="btn a-home">Contactanos ahora</a>
                    </div>
                </section>
                <div class="accordion">
                    <ul>
                    <li>
                        <div>
                        <a href={url} class="sliderLink">
                            <h2>Gatronomia</h2>
                            <p>Prueba<br></br>Saborea<br></br>Conoce nuevos sabores viajando
                
                            </p>
                        </a>
                        </div>
                    </li>
                    <li>
                        <div>
                        <a href={url} class="sliderLink">
                            <h2>Naturaleza</h2>
                            <p>Siente<br></br>Disfruta<br></br>Conectate con la naturaleza viajando
                            </p>
                        </a>
                        </div>
                    </li>
                    <li>
                        <div>
                        <a href={url} class="sliderLink">
                            <h2>Deporte</h2>
                            <p>Ejercitate<br></br>Entrena
                            <br></br>Disfruta de los deportes extremos en otras partes del mundo</p>
                        </a>
                        </div>
                    </li>
                    <li>
                        <div>
                        <a href={url} class="sliderLink">
                            <h2>Explora</h2>
                            <p>Conoce<br></br> Recorre
                            <br></br>Camina por las calles de nuevos lugares
                            </p>
                        </a>
                        </div>
                    </li>
                    <li>
                        <div>
                        <a href={url} class="sliderLink">
                            <h2>Socializa</h2>
                            <p>Aprende<br></br> Diviertete
                            <br></br> Conoce y convive con personas de otros lugares
                            </p>
                        </a>
                        </div>
                    </li>
                    <li>
                        <div>
                        <a href={url} class="sliderLink">
                            <h2>Cultura</h2>
                            <p>Asombrate<br></br>Descubre
                            <br></br>Ten la oportunidad de conocer la cultura de otra parte
                            </p>
                        </a>
                        </div>
                    </li>
                    </ul>
                </div>

                <section class="destinations section-home">
                    <h3 class="title h3-home">Algunos de nuestros destinos</h3>
                    <p class="p-home">¿Te encantan las olas y la arena?, ¿Eres un aficionado a la historia?, ¿Eres un amante de la naturaleza?, ¿buscador de emociones, interesado en los deportes acuáticos, avistamiento de delfines, kayak, paravelismo y buceo?. Tranquilo que en M.E. Travel tenemos algo para todas las personas</p>
                    <hr></hr>
                    <ul class="grid">
                    <li class="small" style={{ backgroundImage: `url(${require("./img/paisaje1.jpg")})` }}></li>
                <li class="large" style={{ backgroundImage: `url(${require("./img/paisaje3.jpg")})` }}>
                    
                </li>
                        <li class="large" style={{ backgroundImage: `url(${require("./img/paisaje4.jpg")})` }}></li>
                        <li class="small" style={{ backgroundImage: `url(${require("./img/paisaje2.jpg")})` }}></li>
                    </ul>	
                    
                </section>

                                                                        
                <section class="packages section-home">
                <h3 class="title h3-home">Ventajas de el viajar con nosotros</h3>		
                <p class="p-home">¿Por qué reservar tus viajes y hospedajes con nosotros y no con la competencia?, bueno existen diferentes ventajas por las cuales deberias de hacerlo.</p>
                <hr></hr>
                <ul class="grid">
                    <li>

                        <h4>Servicio al cliente</h4>
                        <p class="p-home">En M.E. Travel creemos que lo más importante eres tú, por lo que ofrecemos un trato personalizado en caso de tener inconvenientes con algún vuelo, hotel, actividad, etc.</p>
                    </li>
                    <li>

                        <h4>Facilidad de reservación</h4>
                        <p class="p-home">Nuestra página web esta hecha de manera que sea lo más intuitiva posible, todo lo necesario para que el cliente no tenga problemas a la hora de hacer su reservación, sin trabas, sin complicaciones, rápido y fácil.</p>
                    </li>
                    <li>

                        <h4>Precios</h4>
                        <p class="p-home">En M.E. Travel siempre tratamos de dar el mejor precio por la mejor calidad, ya que sabemos lo complicado que puede ser viajar al lugar de tus sueños con tan poco presupuesto.</p>
                    </li>
                    <li>

                        <h4>Experiencias</h4>
                        <p class="p-home">En nuestra agencia no solo buscamos que puedas comprar y reservar fácil, sino que buscamos el brindarte una experiencia única, el que puedas experimentar la maravilla de conocer, caminar y respirar el aire de un lugar nuevo, un lugar de ensueños.</p>
                    </li>
                </ul>
                </section>	

                <section class="testimonials section-home">
                    <h3 class="title h3-home">Testimonios de los viajeros y viajeras de M.E. Travel:</h3>
                    <hr></hr>
                    <p  class="quote p-home">Un lugar maravilloso, muy diferente a los anteriores lugares que había visistado, las gente encantadora y muy amable, definitivamente un lugar que volveria a visitar.</p>
                    <p  class="author p-home">-Amanda D'Cunha</p>
                    <p  class="quote p-home">Nos encanto el trato y servicio de M.E. Travel, gracias a ellos mi familia y yo hemos vivido experiencias inimaginables.</p>
                    <p  class="author p-home">-Angelo Fernandes</p>
                    <p  class="quote p-home">Los vuelos, los hoteles y los lugares que te recomienda son impresionantes, tenían todo lo que buscaba y más.</p>
                    <p  class="author p-home">-Diana Monteiro</p>
                </section>

            </div>
                <div class="container">
                    <Footer/>
                </div>
        </div>
    )
}

export default Home