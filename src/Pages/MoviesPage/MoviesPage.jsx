import React, {  useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { Link,useSearchParams} from "react-router-dom";
import {getMovieByQuery} from '../../Service/Api';
import Searchbar from "components/SearchBar/SearchBar";

export const MoviesPage = () =>{
    const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilm = searchParams.get('query');

  useEffect(() => {
    if (!currentFilm) return;
    getMovieByQuery(currentFilm)
      .then(data => {
        if (data.length === 0) {
          toast.error('No found');
          setSearchParams({});
          return;
        }
        setMovies(data);
      })
      .catch(error => console.error(error));
  }, [currentFilm, setSearchParams]);

  const onSubmitForm = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter the text');
      return;
    }
    setSearchParams({ query: query.trim() });
  };
  const handelInputChange = e => {
    const text = e.currentTarget.value.toLowerCase();
    setQuery(text);
  };


    return(
        <>
            <Searchbar onSubmit={onSubmitForm} onChange={handelInputChange}/>
            {movies&&(
            <ul>
                {movies.map(movie=>(
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul> 
            )}
        </>
                
    );
    
}
