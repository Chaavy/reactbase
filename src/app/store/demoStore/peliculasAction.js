import { getAllMovies } from "../../services/movies/movies.services";

export const GetMoviesAction = dispatch => {
    getAllMovies().then(result => {
        console.log(result?.data);
        if(result.status ===  200){
            dispatch(Movies(result?.data));
        }
    })
    .catch(error => {
        console.log(error);
    });
};

export const Movies = data => {
    return {type: "MOVIES", value: data }
};