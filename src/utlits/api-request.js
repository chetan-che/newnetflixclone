import axios from "axios"

export const BASE_URL = "api.themoviedb.org/3"
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500" 

export const REQUESTS = {
    TRENDING:"/trending/all/week?api_key=7363b131f6edbae71c2639a0fd7372cc&language=en-us",
    NETFLIX_ORIGINALS:"/discover/movie?api_key=7363b131f6edbae71c2639a0fd7372cc&with_genre=28",
    TOP_RATED:"/movie/top_rated?api_key=7363b131f6edbae71c2639a0fd7372cc&language=en-us",
    ACTION_MOVIES:"/discover/movie?api_key=7363b131f6edbae71c2639a0fd7372cc&with_genre=28",
    COMEDY_MOVIES:"/discover/movie?api_key=7363b131f6edbae71c2639a0fd7372cc&with_genre=37",
    HORROR_MOVIES:"/discover/movie?api_key=7363b131f6edbae71c2639a0fd7372cc&with_genre=27",
    ROMANCE_MOVIES:"/discover/movie?api_key=7363b131f6edbae71c2639a0fd7372cc&with_genre=10749",
    DOCUMENTARIES:"/discover/movie?api_key=7363b131f6edbae71c2639a0fd7372cc&with_genre=39",
}

export const getContent = async(REQUEST) =>{
try{
    const response = await axios.get(`${BASE_URL}${REQUEST}`)
    return response?.data 
}
catch(error) {
console.log(error);
 }
}
