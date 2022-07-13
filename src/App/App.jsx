import React  from 'react';
// import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation';
  
import { HomePage } from 'Pages/HomePage/HomePage';
import { MoviesPage } from 'Pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from 'Pages/MovieDetailsPage/MovieDetailsPage';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
// const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
// const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage/MovieDetailsPage'));
// const MoviesPage = lazy(() => import('../Pages/MoviesPage/MoviesPage'));
// const Cast = lazy(() => import('../components/Cast/Cast'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
      
    return (
      <div>
        <Navigation/>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route  path="/movies/:movieId" element={<MovieDetailsPage/>}>
              <Route path="/movies/:movieId/cast" element={<Cast/>}></Route>
              <Route path="/movies/:movieId/reviews" element={<Reviews/>}></Route>
            </Route>
            <Route path="/movies" element={<MoviesPage/>}></Route>
          </Routes>
        {/* </Suspense> */}
                
      </div>
    ); 
  
};


