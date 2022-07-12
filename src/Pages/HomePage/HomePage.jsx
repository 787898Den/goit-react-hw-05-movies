import React, { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import {getTrendingMovies} from '../../Service/Api';

import styles from '../HomePage/HomePage.module.css';

export const HomePage = () => {
    const location = useLocation();
    const [movies, setMovies] = useState(null);
    useEffect(()=>{
        getTrendingMovies().then(data=>setMovies(data.results));
    },[]);

    return(
        <>
        <h1 className={styles.title}>Trending today</h1>
            {movies&&(
            <ul className={styles.list}>
                {movies.map(movie=>(
                    <li key={movie.id}>
                        <Link  className={styles.link} to={`/movies/${movie.id}`} state={location}>{movie.title}</Link>
                    </li>
                ))}
            </ul> 
            )}
        </>
                
    );
    
}
