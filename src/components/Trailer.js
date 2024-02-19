import React from "react";
import { useParams, Link } from 'react-router-dom'
import '../assets/style/Trailer.css';

function Trailer() {
    const params = useParams();
    console.log(params);
    return (
        <>
            <Link to="/">
                <button class="btn" type="button">
                    <strong>Acceuil</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </button>
            </Link>
        

            <iframe width="100%" height="500vh"
                src={`https://www.youtube.com/embed/${params['*']}`}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
            <h3>  </h3>
        </>
    )
}
export default Trailer;