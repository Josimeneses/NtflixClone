import React, { useEffect, useState} from 'react'
import { getMovies } from '../api.js';
import './Row.css';

const imageHost = "https://image.tmdb.org/t/p/original/";
function Row ({ title, path }) {
    const [movies, setMovies]= React.useState([]);
    
    const fetchMovies = async (_path) =>{
        try {
           const data = await getMovies (_path);
           console.log("data",data);
           setMovies(data?.results);
       }catch (error){
           console.log ("fetchMovies error:", error);
        }
        
    };

    useEffect(() => {
      //first effect
       fetchMovies(path);
    }, [path]);
    

    return(
        <div className="row-container">Row
        <h2 className="row-header">{title}</h2>
        <div className="row-cards">
            {movies?.map(movie =>{
                return(
                    <img 
                    className="movie-card"
                    key={movie.id} 
                    src={`${imageHost}${movie.poster_path}`} 
                    alt={movie.name}></img>
                )
            })}
        </div>
        </div>

    )
}

export default Row