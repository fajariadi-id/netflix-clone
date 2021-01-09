import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const imgUrl = 'https://image.tmdb.org/t/p/original';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginal);
      const movies = request.data.results;
      setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    };

    fetchData();
  }, []);

  return (
    <header
      className='banner'
      style={{
        background: `linear-gradient(to top, var(--clr-black), rgba(0,0,0,0)), url(${imgUrl}${movie?.backdrop_path}) center/cover no-repeat`,
      }}
    >
      <div className='container'>
        <div className='banner-content'>
          <h1 className='title'>{movie?.title || movie?.name}</h1>
          <p className='desc'>{movie?.overview}</p>

          <div className='btn-container'>
            <button className='btn play'>
              <FontAwesomeIcon icon='play' className='banner-icon' /> Play
            </button>
            <button className='btn info'>
              <FontAwesomeIcon icon='info-circle' className='banner-icon' />{' '}
              More Info
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
