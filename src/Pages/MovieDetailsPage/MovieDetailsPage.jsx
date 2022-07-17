import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, Outlet, useLocation} from "react-router-dom";
import {getMovieDetails} from '../../Service/Api';
import { getGenres } from "Service/getGenres";
import { BackLink } from "components/LinkBack/LinkBack";
import defaultImg from '../../images/Unknown Profile Picture Png.png';
import { Description, Genres, OverviewText,Overview, Title, Userscore, Wrapper,Image, Thumb } from "./MovieDetailsPage.styled";
import { NotFoundPage } from "Pages/NotFoundPage/NotFoundPage";

export const MovieDetailsPage = () => {

    const [movie, setMovie] = useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(false);
    const location = useLocation();
    const goBack = location.state?.from ?? '/';
    const search = useRef(location.state?.from?.search);
    const { title, poster_path, popularity, overview, genres } = movie;

    useEffect(() => {
        getMovieDetails(movieId)
        .then(data => {
          if (data.length !== 0) {
            return setMovie(data);
          }
        })
        .catch(error => {
          console.error(error);
          setError(true);
        });
    }, [movieId]);

    return(
        <>
            {error && <NotFoundPage />}
 
            {movie.length !== 0 && (
            <>
            <BackLink href={goBack} />
            <Wrapper>
                <Image src={poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : defaultImg} alt={title} />

                <Thumb >
                    <Title>{title}</Title>
                    <Userscore>User Score:{Math.floor(popularity)}%</Userscore>
                    <Overview>Overview</Overview>
                    <OverviewText>{overview}</OverviewText>
                    <Genres>Genres</Genres>
                    <Genres>{getGenres(genres)}</Genres>
                </Thumb>
            </Wrapper>
            
            <Title >Additional information</Title>
            <Description>
                <Link to="cast"
                      state={{
                      from: search.current ? `/movies${search.current}` : '/',
                    }}>Cast</Link>
                <Link to="reviews"
                      state={{
                        from: search.current ? `/movies${search.current}` : '/',
                    }}>Reviews</Link>
                    <Outlet />
            </Description>
            </>  
            )} 
      </>       
    );
}