import React from 'react';
import './SingleMovie.css';
import { IMG_BASE_URL } from '../../utlits/api-request';

const SingleMovie = ({movies}) => {
  return (
    <div className="single-movie">
      <img src={`${IMG_BASE_URL}${movies.poster_path}`} alt="" />
    </div>
  );
}

export default SingleMovie;