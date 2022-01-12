import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../apis/movieApi'
import { APIKey } from '../../apis/MovieApiKey'

export const fetchAsynceMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movieText = "Harry"
  const res = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`).catch((err) => { console.log(err) })
  return res.data
})

const initialState = {
  movies: {}
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    }
  },
  extraReducers: {
    [fetchAsynceMovies.pending]: () => {
      console.log("pending")
    },
    [fetchAsynceMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched success');
      return { ...state, movies: payload };
    },
    [fetchAsynceMovies.rejected]: () => {
      console.log('rejected');

    }
  }

})

export const { addMovies } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer