import React, { useState, useEffect } from "react";

import axios from "../src/axios";

import "../src/Row.css";
const baseImageUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

  const showTrailer = (e) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
    }
  };

  //use effect runs once the row is loading//
  useEffect(() => {
    //[]-means,run once when Row loads and not again

    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* title */}
      <h2 className="genre">{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={showTrailer}
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${baseImageUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
