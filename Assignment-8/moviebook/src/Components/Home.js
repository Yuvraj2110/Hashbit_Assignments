import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./style.css";

function Home() {
  const [list, setList] = useState([]);

  const getData = async () => {
    let url = "http://www.omdbapi.com/?apikey=610e72a2&s=movie";
    let res = await fetch(url);
    let data = await res.json();
    data = data.Search;
    // console.log(data);
    setList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="home">
        {list &&
          list.map((element) => {
            return (
              <div key={element.Title}>
                <MovieCard movie={element} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;

