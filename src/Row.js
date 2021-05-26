import React,{useState,useEffect}from 'react';
import "./Row.css";
import axios from './axios';
//import Youtube from "react-youtube";
//import movieTrailer from "movie-trailer";
//import Banner from './Banner'
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]); //dependency
    // console.log(movies);

    return (
        <div className="row">
          <h2>{title}</h2>
          {/* <div className="row__posters">
            several row__poster(s) */}
            {movies.map((movie) => (
              <img
              src={``} alt=""
                // key={movie.id}
                
                // className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                // src={`${base_url}${
                //   isLargeRow ? movie.poster_path : movie.backdrop_path
                // }`}
                // alt={movie.name}
              />
            ))}
          </div>
         
        
      );
}

export default Row
