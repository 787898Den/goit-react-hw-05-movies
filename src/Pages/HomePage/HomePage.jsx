import React, { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import {getTrendingMovies} from '../../Service/Api';
import { StyleLink, Thumb, Title} from '../HomePage/HomePage.styled';

export const HomePage = () => {
    const location = useLocation();
    const [movies, setMovies] = useState(null);
    useEffect(()=>{
        getTrendingMovies().then(data=>setMovies(data.results));
    },[]);

    return(
        <>
        <Title>Trending today</Title>
            {movies&&(
            <Thumb>
                {movies.map(movie=>(
                    <li key={movie.id}>
                        <StyleLink to={`/movies/${movie.id}`} state={location}>{movie.title}</StyleLink>
                    </li>
                ))}
            </Thumb> 
            )}
        </>
                
    );
    
}
