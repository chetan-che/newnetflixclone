import React from 'react';
import './MovieContainer.css';
import GenreContainer from '../GenreContainer/GenreContainer';
import { MOVIE_CONTENT } from '../../utlits/content';

const MovieContainer = () => {
  return (
    <div className="movie-container">
      {
        MOVIE_CONTENT?.map((content) =>(
          <GenreContainer title={content.title} movieUrl={content.movie_url}/>
        ))
      }
    </div>
  );
}

export default MovieContainer;