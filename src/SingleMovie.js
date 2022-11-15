import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';
import useFetch from './useFetch';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);
  // const [movie, setMovie] = useState({});
  // const [isLoading, setLoading] = useState(true);
  // const [error, setError] = useState({ show: false, msg: '' });

  // const fetchMovie = async (url) => {
  //   const resp = await fetch(url);
  //   const data = await resp.json();
  //   // console.log(data);
  //   if (data.Response === 'False') {
  //     setError({ show: true, msg: data.Error });
  //     setLoading(false);
  //   } else {
  //     setMovie(data);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovie(`${API_ENDPOINT}&i=${id}`);
  // }, [id]);
  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Genre: genre,
    Runtime: runtime,
    Type: type,
    imdbVotes: imdbVotes,
    imdbRating: imdbRating,
    Released: released,
  } = movie;
  return (
    <section className="single-movie">
      <img src={poster === 'N/A' ? url : poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{`Released: ${released}`}</h4>
        <h4>{`Genre: ${genre}`}</h4>
        <h4>{`Runtime: ${runtime}`}</h4>
        <h4>{`Type: ${type}`}</h4>
        <h4>{`IMDb rating: ${imdbRating}`}</h4>
        <h4>{`IMDb Votes: ${imdbVotes}`}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
