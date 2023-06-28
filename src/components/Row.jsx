import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie';

const Row = ({ title, fetchURL, rowID }) => {
   const [movies, setMovies] = useState([]);
   const [like, setLike] = useState(false);
   const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

   useEffect(() => {
      const options = {
         method: 'GET',
         url: fetchURL,
         params: { language: 'en-US', page: '1' },
         headers: {
            accept: 'application/json',
            Authorization: accessToken,
         },
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

   const slideLeft = () => {
      let slider = document.getElementById('slider' + rowID);
      slider.scrollLeft = slider.scrollLeft - 500;
   };
   const slideRight = () => {
      let slider = document.getElementById('slider' + rowID);
      slider.scrollLeft = slider.scrollLeft + 500;
   };

   return (
      <>
         <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
         <div className='relative flex items-center group'>
            <MdChevronLeft
               onClick={slideLeft}
               className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
               size={40}
            />
            <div
               id={'slider' + rowID}
               className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
               {movies.map((item, id) => (
                  <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                     <img
                        className='w-full h-auto block'
                        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                        alt={item?.title}
                     />
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                           {item.title}
                        </p>
                        <p>
                           {like ? (
                              <FaHeart className='absolute top-4 left-4 text-gray-300' />
                           ) : (
                              <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                           )}
                        </p>
                     </div>
                  </div>
                  // <Movie />
               ))}
            </div>
            <MdChevronRight
               onClick={slideRight}
               className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
               size={40}
            />
         </div>
      </>
   );
};

export default Row;
