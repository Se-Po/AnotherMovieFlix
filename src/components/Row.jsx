import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Row = ({title,fetchURL}) => {
const [movies, setMovies] = useState([])

  useEffect(() =>{
    const options = {
      method: 'GET',
      url: fetchURL,
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TMDB_ACCESS_TOKEN,
      }
    };

    axios
    .request(options)
    .then(response => {
     setMovies(response.data.results);
  })
  .catch(function (error) {
    console.error(error);
  });
}, [fetchURL]);

  console.log(movies)

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center'>
      <div id={"slider"}>

      </div>
    </div>
    </>
  )
}

export default Row