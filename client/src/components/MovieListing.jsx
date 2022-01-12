import { useSelector } from "react-redux"
import { getAllMovies, getAllShows } from "../features/movies/movieSlice"
import MovieCard from './MovieCard'

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies, renderShows = "";

  renderMovies = movies.Response === "True" ? (movies.Search.map((movie, index) =>
    (<MovieCard key={index} data={movie} />)
  )) : (<div><h3>{movies.Error
  }</h3 ></div >)

  renderShows = shows.Response === "True" ? (shows.Search.map((show, index) =>
    (<MovieCard key={index} data={show} />)
  )) : (<div><h3>{shows.Error
  }</h3 ></div >)

  return (
    <div>
      <div>
        <h2 className="flex justify-center pt-5 font-bold text-3xl w-[100%]">Movies</h2>
        <div className="grid grid-cols-4 gap-10 p-10s">
          {renderMovies}
        </div>
      </div>
      <div>
        <h2 className="flex justify-center pt-5 font-bold text-3xl w-[100%]">Shows</h2>
        <div className="grid grid-cols-4 gap-10 p-10">
          {renderShows}
        </div>
      </div>
    </div>
  )
}

export default MovieListing
