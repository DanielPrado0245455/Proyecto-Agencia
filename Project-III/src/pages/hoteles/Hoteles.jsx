import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Carrousel from "../../components/carrousel/Carrousel";
import "./Hoteles.css";
import React from 'react';

let url = "";

const Hoteles = () => {
    return(
        <div className="container page-hotel">
            <div>
                <Navbar/>
            </div>
            <div>
                <Carrousel/>
            </div>
            <div class="body-hotel">
                <div class=" container-hotel text-center grid ">
                    <a name="1" href="#/" class="titulo-pais"><h1 class="titulo-pais">Rusia</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://i.pinimg.com/originals/87/71/6c/87716c15613cb54fcef1e1502a68bbc5.jpg" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Rocco Forte Astoria Hotel</h5>
                            <p class="card-text-hotel">Este hotel se encuentra en la mejor zona de San Petersburgo y tiene una puntuación excelente de 9.9 por su ubicación
¿Quieres dormir muy bien? Este hotel tiene una puntuación muy alta por la comodidad de sus camas.</p>
                            <a href="https://www.roccofortehotels.com/hotels-and-resorts/hotel-astoria/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/335205641.webp?k=c9165039da14f5d23fc2410598166b60bb7d24fd6a65f561089cd9c9cc183598&o=&s=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Metropol</h5>
                            <p class="card-text-hotel">Al contar con muchos conocidos puntos de referencia en las inmediaciones, como GUM (0,2 km) y Nikolskaya Street (0,3 km), facilita la visiata de estso lugares y más.</p>
                            <a href={url} class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/402626171.webp?k=c7f68f3286f79c71dceb1141b0bd691972c2740386a145f0f616fa585decee65&o=&s=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Swissotel Krasnye Holmy</h5>
                            <p class="card-text-hotel">Este hotel se encuentra en el corazón de Moscú, a 5 minutos a pie de la estación de metro Paveletskaya, y ofrece vistas panorámicas a la ciudad, una elegante piscina cubierta y un bar galardonado.</p>
                            <a href="https://www.swissotel.es/hotels/moscow/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid">
                    <a name="2" href="#/" class="titulo-pais"><h1 class="titulo-pais">México</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max500/362900586.jpg?k=3b9362a4149d4a4c8f8531acb72fa80ddc5db1610f35231b8fa65edee1e524bb&o=&hp=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Flamenco</h5>
                            <p class="card-text-hotel">El Hotel Flamencos se encuentra en Ciudad de México, a menos de 1 km de la plaza del Zócalo, y ofrece alojamiento con restaurante, aparcamiento privado gratuito, centro de fitness y bar.</p>
                            <a href="https://www.hotelflamencos.com/es/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://media.staticontent.com/media/pictures/1ebe2f87-3c7f-4b5e-bcc8-94dffe55c5d9" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Catedral</h5>
                            <p class="card-text-hotel">Los lugares de interés populares cerca del Hotel Catedral incluyen el recinto ceremonial de Tenochtitlan, el Palacio de Correos y los murales de Diego Rivera en la Secretaría de Educación Pública. </p>
                            <a href="https://www.hotelcatedral.com/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/293055441.jpg?k=5a51872843e9817a8f08ab0ed3f37402e71ab8fa3ce87e0a8cb05f5a5f72ffe1&o=&hp=1s" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Kali Centro Mexico City</h5>
                            <p class="card-text-hotel">Muy cerca de Zócalo, Kali Centro Mexico City te espera con una variedad de servicios para una estancia placentera. Contarás con wifi gratis en las habitaciones.</p>
                            <a href="https://www.kalihoteles.com/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="3" href="#/" class="titulo-pais"><h1 class="titulo-pais">Francia</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/269837168.jpg?k=b1e4d2805a9804d746847e2b04b6219d48c895a1ca3797358df00aee310a8c30&o=&hp=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Le Basile Hôtel</h5>
                            <p class="card-text-hotel">El Hotel Basile está en el distrito 9 de París, a 2 minutos a pie de la Place de la Madeleine y a 600 metros de la ópera Garnier. Cuenta con una recepción abierta las 24 horas y conexión Wi-Fi gratuita en todas las zonas.</p>
                            <a href="https://www.hotelbasile.com/fr/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/78264832.jpg?k=d962fa20d69bca5d6348ae42a004b2e6b8e46361b4a172efb2407405ea1b5542&o=&hp=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Select Hotel</h5>
                            <p class="card-text-hotel">El establecimiento está a 900 metros de la catedral de Notre Dame y combina una arquitectura clásica y un diseño moderno. Además, el hotel ofrece alojamientos de lujo en un entorno tranquilo.</p>
                            <a href="https://www.selecthotel.fr/es/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/310909924.jpg?k=ac383c994989b3309f183dbf43c96fc16fca4a61260ccb68d5f4e914f6dc4e40&o=&hp=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Touraine Opera</h5>
                            <p class="card-text-hotel">La sala de desayunos tiene un techo abovedado de piedra y sirve un desayuno buffet francés e inglés todas las mañanas. Todas las habitaciones tienen aire acondicionado y están decoradas en tonos neutros con ropa de cama a rayas.</p>
                            <a href="https://hoteltouraine.com/fr/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="4" href="#/" class="titulo-pais"><h1 class="titulo-pais">Italia</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/239129719.jpg?k=c3fe595fefaa0a8448dbac5d5901b49c991859dc0bacb45b634846359e3567ff&o=&hp=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Speronari Suites</h5>
                            <p class="card-text-hotel">El Speronari Suites se encuentra en el centro de Milán y ofrece alojamiento, restaurante, recepción 24 horas, servicio de habitaciones, WiFi gratuita y bar.</p>
                            <a href="https://www.speronarisuites.it/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/408255842.jpg?k=0369a104ff63bf785dcf13858128c7f5434aedcad93553293a731740a752f13f&o=&hp=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Modica Boutique Hotel</h5>
                            <p class="card-text-hotel">El establecimiento ofrece alojamiento de 4 estrellas con zona de bienestar con sauna, baño turco, ducha de sensaciones y sillones de relajación por un suplemento y piscina al aire libre no climatizada. </p>
                            <a href="https://www.modicaboutiquehotel.it/en/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/311281343.jpg?k=075235259eb396c3e180a08ef26b3498cf678566c4772ec29bb329700d27e898&o=&hp=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Astoria</h5>
                            <p class="card-text-hotel">Hospédate en Astoria Hotel Italia y aprovecha la calidad de sus servicios, como jardín, servicio de lavandería o tintorería y bar. </p>
                            <a href="http://www.hotelastoria.udine.it/?page_id=prodotti&idcontenuto=422" class="btn-hotel">Info</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="5" href="#/" class="titulo-pais"><h1 class="titulo-pais">Colombia</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/274814172.jpg?k=45950f9b4fa0a1903b7df42ce386d935956d7f432ef06705715030f6ae03556b&o=&hp=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Lettera Hotel</h5>
                            <p class="card-text-hotel">Cerca del Lettera Hotel hay varios lugares de interés, como el parque Lleras, el parque de la Bailarina y el parque Lineal President. El aeropuerto Olaya Herrera, el más cercano, se halla a 4 km.</p>
                            <a href="https://www.letterahotel.com/es/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/314256600.jpg?k=cba10bc5c64ed01a89bd64baac84df8f40710177dd1856931e949b10dd59bf27&o=&hp=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">HAB Hotel Bogotá</h5>
                            <p class="card-text-hotel">HAB Hotel te espera con servicios de alta calidad, como supermercado o tienda de conveniencia, recepción gratuita organizada todos los días por la dirección y terraza en la azotea. </p>
                            <a href="https://habhotel.co/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/263589863.jpg?k=50049ff60d666ee6a94e2940040ae492a3718beab1c52058789a2d29a1dfead9&o=&hp=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">FR Hotel</h5>
                            <p class="card-text-hotel">El FR Hotel se encuentra en Ibagué y ofrece restaurante, centro de fitness, bar y jardín. Este hotel de 4 estrellas cuenta con mostrador de información turística y consigna de equipaje. </p>
                            <a href="https://frhotel.negocio.site/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="6"href="#/" class="titulo-pais"><h1 class="titulo-pais">Argentina</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/cd/0e/34/hotel-nuevo-ostende.jpg?w=800&h=-1&s=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Nuevo Ostende by bund</h5>
                            <p class="card-text-hotel">El Hotel Nuevo Ostende se encuentra a solo 500 metros de la playa de La Perla y ofrece habitaciones elegantes con wifi gratis. La plaza San Martín, que alberga la feria de artesanía del fin de semana, está a 50 metros.</p>
                            <a href="https://www.nuevoostendehotel.com.ar/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/67/15/de/deluxe-falls-view-king.jpg?w=800&h=-1&s=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Gran Meliá Iguazú</h5>
                            <p class="card-text-hotel">El Gran Meliá Iguazú goza de una ubicación estratégica dentro del parque nacional de Iguazú y cuenta con piscina de borde infinito e instalaciones de spa. Además, alberga 3 restaurantes y 4 bares.</p>
                            <a href="https://www.melia.com/es/hoteles/argentina/parque-nacional-de-iguazu/gran-melia-iguazu" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/3e/e2/4c/superior-room.jpg?w=1000&h=-1&s=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Mine Hotel Boutique</h5>
                            <p class="card-text-hotel">El Mine Hotel está ubicado en el elegante barrio de Palermo Soho. Este galardonado establecimiento de diseño alberga una piscina en el jardín y un patio con una fuente. </p>
                            <a href="https://www.minehotel.com/en/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="7" href="#/" class="titulo-pais"><h1 class="titulo-pais">España</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://images.trvl-media.com/lodging/2000000/1070000/1062500/1062405/47851ca6.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Urban</h5>
                            <p class="card-text-hotel">Este hotel boutique alberga una exposición de arte permanente, típica de Papúa Nueva Guinea. El Hotel Urban tiene una pequeña pileta en la azotea, una terraza abierta en verano y un bar de cócteles.</p>
                            <a href="https://www.hotelurban.com/es" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://images.trvl-media.com/lodging/5000000/4590000/4585300/4585288/1189ebd8.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Boutike Cibeles</h5>
                            <p class="card-text-hotel">Este apart-hotel para no fumadores ofrece una terraza en la azotea, un centro de negocios y salas de conferencias.Cada departamento se destaca por detalles como la tina profunda. </p>
                            <a href="https://boutikecibeles.com-hotel.com/es/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://images.trvl-media.com/lodging/10000000/9560000/9550100/9550091/998ee1e4.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">The Principal Madrid</h5>
                            <p class="card-text-hotel">Hotel 5 estrellas de lujo cerca de Gran Vía
The Principal Madrid se encuentra cerca de Puerta del Sol y Plaza Mayor, ofreciéndote traslado al aeropuerto (ida y vuelta), terraza en la azotea y biblioteca. </p>
                            <a href="https://www.theprincipalmadridhotel.com/en/" class="btn-hotel">Info</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>         
        </div>
    )
}

export default Hoteles