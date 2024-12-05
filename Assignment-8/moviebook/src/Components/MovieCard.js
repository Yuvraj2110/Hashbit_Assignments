import React from "react"; 
import { Link } from "react-router-dom";

function MovieCard(props) {
    const {movie}=props;

    
  return (
    <>
      <div className="card border border-secondary mx-1 my-1 px-1 py-2 d-flex" style={{width:"18rem"}}>
        <img src={movie.Poster} className="card-img-top" height="300px" alt="" />
        <div className="card-body">
          <p className="card-text">
            {movie.Title}- {movie.Year}
          </p>
        </div>
        <Link to={`/aboutMovie/${movie.imdbID}`} className="btn btn-primary w-50">Show More</Link>
      </div>
    </>
  );
}

export default MovieCard;
