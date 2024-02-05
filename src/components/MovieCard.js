import React from "react";
import '../assets/style/MovieCard.css';

// ? template Card bootstrap from : https://codepen.io/sukhsingh2729/pen/rRxEGW
const MovieCard = ({ titre, description, posterURL, note }) => {
    return (
        <>
                <div className="card movie_card">
                    <img src={posterURL} className="card-img-top" alt={titre} />
                    <div className="card-body">
                        <i className="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                        </i>
                        <h5 className="card-title">{titre}</h5>
                        <span className="movie_info">{description}</span>
                        <span className="movie_info float-right"><i className="fas fa-star"></i> {note} / 10</span>
                    </div>
                </div>
        </>
    );
}

export default MovieCard;