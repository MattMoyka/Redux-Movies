import { useEffect } from 'react'
import MovieListing from './MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsynceMovies, fetchAsynceShows } from '../features/movies/movieSlice'


function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsynceMovies())
    dispatch(fetchAsynceShows())
  }, [dispatch])



  return (
    <div>
      <div></div>
      <MovieListing />
    </div>
  )
}

export default Home
