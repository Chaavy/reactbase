import { MOVIES } from "./utils";
import axios from 'axios';

export const getAllMovies = () => {
  return axios.get('https://ghibliapi.herokuapp.com/films');
};
