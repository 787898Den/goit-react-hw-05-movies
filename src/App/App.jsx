import React  from 'react';
import { Suspense,lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation';

//lazy imports
const HomePage = lazy(() =>
  import('../Pages/HomePage/HomePage').then(module => ({ default: module.HomePage }))
);
const MovieDetailsPage = lazy(() =>
  import('../Pages/MovieDetailsPage/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);
const MoviesPage = lazy(() =>
  import('../Pages/MoviesPage/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);
const Reviews = lazy(() =>
  import('../components/Reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

const Cast = lazy(() =>
  import('../components/Cast/Cast').then(module => ({
    default: module.Cast,
  }))
);

export const App = () => {
      
    return (
      <Suspense fallback ={<div>LOADING</div>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigation to="/" />} />
      </Routes>
      </Suspense>
    ); 
  
};