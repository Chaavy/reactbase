import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from './authorization/authorizationReducer'
// import moviesReducer from './demoStore/peliculasReducer'


export default configureStore({
  reducer: {
    // Movies: moviesReducer
    Authorization: authorizationReducer
  },
})