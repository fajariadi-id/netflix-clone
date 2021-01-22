import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import './Row.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalVideo from 'react-modal-video';
import '../../utils/assets/img/x-square.svg';
import movieTrailer from 'movie-trailer';

const imgUrl = 'https://image.tmdb.org/t/p/w300';

const Row = ({ rowTitle, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };

    fetchData();
  }, [fetchUrl]);

  const [active, setActive] = useState(0);
  const nextSlide = () => {
    setActive(active === 3 ? 3 : active + 1);
  };

  const prevSlide = () => {
    setActive(active === 0 ? 0 : active - 1);
  };

  const [isOpen, setOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleOpenTrailer = (movie) => {
    setOpen(true);
    movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((err) => console.log(err));
    console.log(movie?.name || movie?.title || movie?.original_name || '');
  };

  return (
    <div className='row'>
      <h1 className='row-title'>{rowTitle}</h1>

      <ModalVideo
        autoplay='1'
        channel='youtube'
        isOpen={isOpen}
        videoId={trailerUrl}
        onClose={() => setOpen(false)}
      />

      <div className='card-container d-flex'>
        {movies.map((movie, idx) => {
          return (
            <div
              className='card'
              key={movie.id}
              onClick={() => handleOpenTrailer(movie)}
              style={{
                //? 1410 = jumlah dari width 6 poster serta marginnya
                //? 1097 = jumlah dari width sisa ketika slider mencapai akhir slide
                left: `-${active < 3 ? active * 1410 : active * 1097}px`,

                //? idx = 14 / idx = 17 -> nth-child movie yang ke-15 dan ke-18 yang ditangkap dari index movie
                transformOrigin: ` 
                ${active === 3 && idx === 14 ? 'left' : 'center'}
                ${active === 2 && idx === 17 ? 'right' : 'center'}`,
              }}
            >
              <img
                src={`
                  ${imgUrl}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
                className={`poster ${isLarge && 'poster-large'}`}
              />
              <div className='movie-info'>
                <h2 className='title'>{movie.name || movie.title}</h2>
                <span className='rating'>
                  <FontAwesomeIcon icon='star' className='star' />{' '}
                  {movie.vote_average}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className='btn-container'>
        <button className='slider prev' onClick={prevSlide}>
          <FontAwesomeIcon icon='chevron-left' />
        </button>
        <button className='slider next' onClick={nextSlide}>
          <FontAwesomeIcon icon='chevron-right' />
        </button>
      </div>
    </div>
  );
};

export default Row;
