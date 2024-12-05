import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";

function AboutMovie() {
  const { id } = useParams();
  const [Movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    const url = `http://www.omdbapi.com/?apikey=610e72a2&i=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
    console.log(data);
  };
  useEffect(() => {
    fetchMovie();
    
  }, [])
  

  // const Movie = {
  //   Title: "The Lego Movie",
  //   Year: "2014",
  //   Rated: "PG",
  //   Released: "07 Feb 2014",
  //   Runtime: "100 min",
  //   Genre: "Animation, Action, Adventure",
  //   Director: "Phil Lord, Christopher Miller",
  //   Writer: "Phil Lord, Christopher Miller, Dan Hageman",
  //   Actors: "Chris Pratt, Will Ferrell, Elizabeth Banks",
  //   Plot: 'The LEGO Movie is a 3D animated film which follows lead character, Emmet a completely ordinary LEGO mini-figure who is identified as the most "extraordinary person" and the key to saving the Lego universe. Emmet and his friends go on an epic journey to stop the evil tyrant, Lord Business.',
  //   Language: "English, Turkish",
  //   Country: "United States, Denmark, Australia, Norway",
  //   Awards: "Nominated for 1 Oscar. 72 wins & 67 nominations total",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
  //   Ratings: [
  //     { Source: "Internet Movie Database", Value: "7.7/10" },
  //     { Source: "Rotten Tomatoes", Value: "96%" },
  //     { Source: "Metacritic", Value: "83/100" },
  //   ],
  //   Metascore: "83",
  //   imdbRating: "7.7",
  //   imdbVotes: "395,188",
  //   imdbID: "tt1490017",
  //   Type: "movie",
  //   DVD: "N/A",
  //   BoxOffice: "$257,966,122",
  //   Production: "N/A",
  //   Website: "N/A",
  //   Response: "True",
  // };
  return (
    <>
    {!Movie && <div>
      <h1> Loading details....</h1>
    </div>}
      {Movie && (
        <div className="aboutMovie">
          <div className="aboutmovie-poster">
            <img src={Movie.Poster} class="img-fluid" alt="..." />
          </div>
          <div className="aboutmovie-details">
            <div>
              <h1>
                {Movie.Title}-{Movie.Year}
              </h1>
            </div>
            <div style={{ minWidth: "300px", width: "60%" }}>
              <p>{Movie.Plot}</p>
            </div>
            {Movie.Ratings && Movie.Ratings.length > 0 && (
              <div>
                <h3>Ratings:</h3>
                {Movie.Ratings.map((ele) => {
                  return (
                    <div>
                      {ele.Source}: {ele.Value}
                    </div>
                  );
                })}
              </div>
            )}
            <div className="my-2">
              <Link
                to={`/bookmovie/${Movie.Title}`}
                className="btn btn-primary"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutMovie;
