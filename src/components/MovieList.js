import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <>
    <div className="movie-list" style={{display:"flex" , flexWrap:"wrap",marginTop:"2%",justifyContent:"center"}}>
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
    </>
  );
};

export default MovieList;
