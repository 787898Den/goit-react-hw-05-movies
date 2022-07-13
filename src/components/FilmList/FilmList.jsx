import PropTypes from 'prop-types';
import { Item,List } from './FilmList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList  = ({ movies }) => {

  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => (
          <li key={id}>
            <Item to={`/movies/${id}`} state={{from:location}}>{title}</Item>
          </li>
        ))}
    </List>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array,
};