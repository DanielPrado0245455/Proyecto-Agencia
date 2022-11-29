import "./Icons.css";
import Instagram from "./img/instagram.png";
import Facebook from "./img/facebook.png";
import GitHub from "./img/github.png";
import YouTube from "./img/youtube.png";
import Twitter from "./img/gorjeo.png";
let url="";
const Icons = () => {
    return(
        <section class="section-icons">
            <ul class="icon-list">
                <li class="icon-item">
                <a href={url} class="icon-link"><img src={Instagram} alt=""></img></a>
                </li>
                <li class="icon-item">
                <a href={url} class="icon-link"><img src={Facebook} alt=""></img></a>
                </li>
                <li class="icon-item">
                <a href={url} class="icon-link"><img src={GitHub} alt=""></img></a>
                </li>
                <li class="icon-item">
                <a href={url} class="icon-link"><img src={YouTube} alt=""></img></a>
                </li>
                <li class="icon-item">
                <a href={url} class="icon-link"><img src={Twitter} alt=""></img></a>
                </li>    
            </ul>
        </section>
    )
}

export default Icons