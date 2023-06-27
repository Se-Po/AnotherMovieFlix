import React, { useEffect, useState } from "react";
import requests from "../Requests"
import axios from "axios"



const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
      

      axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {   //request popular
            headers: {
              accept: 'application/json',
              Authorization: accessToken
            },
      })
          .then(response => {
            setMovies(response.data.results);
          })
          .catch(error => {
            console.error(error);
          });   
  }, []);
  console.log(movies);
      
  return (
    <div>Main</div>
  )
}

export default Main