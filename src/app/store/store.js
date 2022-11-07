import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './demoStore/peliculasReducer'

export default configureStore({
  reducer: {
    Movies: moviesReducer
  },
})