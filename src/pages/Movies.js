import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { GetMoviesAction } from '../app/store/demoStore/peliculasAction';

export const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state?.Movies?.Movies);

  const getMovies = () => GetMoviesAction(dispatch);

  return (
    <>
      <h1>Peliculas</h1>
      <hr></hr>
      <button onClick={getMovies}>Obtener lista de peliculas</button>
      {
        movies && movies.map(element => {
          return <>
          <h3>{element.title}</h3>
          </>
        })
      }
    </>
  );
};

export default Movies;
