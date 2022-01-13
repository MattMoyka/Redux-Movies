import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../apis/movieApi'




const APIKey = process.env.REACT_APP_API_KEY


export const fetchAsynceMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movieText = "Harry"
  const res = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`).catch((err) => { console.log(err) })
  return res.data
})

export const fetchAsynceShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
  const seriesText = "Friends"
  const res = await movieApi.get(`?apikey=${APIKey}&s=${seriesText}&type=series`).catch((err) => { console.log(err) })
  return res.data
})

export const fetchAsynceMovieOrShowDetail = createAsyncThunk('movies/fetchAsynceMovieOrShowDetail', async (id) => {
  const res = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`).catch((err) => { console.log(err) })
  return res.data
})

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {}
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {

    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {}
    }
  },
  extraReducers: {
    [fetchAsynceMovies.pending]: () => {

    },
    [fetchAsynceMovies.fulfilled]: (state, { payload }) => {

      return { ...state, movies: payload };
    },
    [fetchAsynceMovies.rejected]: () => {


    },
    [fetchAsynceShows.fulfilled]: (state, { payload }) => {

      return { ...state, shows: payload };
    },
    [fetchAsynceMovieOrShowDetail.fulfilled]: (state, { payload }) => {

      return { ...state, selectMovieOrShow: payload };
    }
  }

})

export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies?.selectMovieOrShow
export default movieSlice.reducer