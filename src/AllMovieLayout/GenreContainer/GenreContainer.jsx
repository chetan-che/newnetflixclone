import React, { useState , useEffect} from 'react';
import './GenreContainer.css';
import SingleMovie from "../SingleMovie/SingleMovie"
import { REQUESTS, getContent } from '../../utlits/api-request';

const GenreContainer = ({title , movieUrl}) => {

  const [movies , setMovies] = useState([])

  useEffect(()=>{
    const fetch = async() =>{
      const data = await getContent(REQUESTS.movieUrl)
      setMovies(data?.results)
    }
        fetch()
  },[movieUrl])
  return (
    <div className="genre-container">
      <h1>{title}</h1>
{
 movies?.map((movie) =>(
     <SingleMovie movies={movie}/>
  ))
}
   
    </div>
  );
}

export default GenreContainer;