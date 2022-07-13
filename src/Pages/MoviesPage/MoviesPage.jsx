import React, {  useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useSearchParams} from "react-router-dom";
import {getMovieByQuery} from '../../Service/Api';
import Searchbar from "components/SearchBar/SearchBar";
import { MovieList } from "components/FilmList/FilmList";

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
    if (query === 0) {
      toast.error('Please, enter the text');
      return;
    }
    setSearchParams({ query: query});
  };
  const handelChange = e => {
    const text = e.currentTarget.value.toLowerCase().trim();
    setQuery(text);
  };


    return(
        <>
         <Searchbar onSubmit={onSubmitForm} onChange={handelChange}/>
            <MovieList movies={movies} />
        </>        
    );
    
}
