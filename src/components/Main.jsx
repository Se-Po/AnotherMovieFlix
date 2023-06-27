import React, { useEffect, useState } from "react";
import axios from "axios"
import requests from "../Requests";



const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
      

      axios.get(requests.requestPopular, {   
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