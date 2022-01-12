import { useSelector } from "react-redux"
import { getAllMovies } from "../features/movies/movieSlice"
import MovieCard from './MovieCard'

function MovieListing() {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies = movies.Response === "True" ? (movies.Search.map((movie, index) =>
    (<MovieCard key={index} data={movie} />)
  )) : (<div><h3>{movies.Error
  }</h3 ></div >)

  return (
    <div>
      <div>
        <h2 className="flex justify-center pt-5 font-bold text-3xl w-[100%]">Movies</h2>
        <div className="grid grid-cols-4 gap-10 p-10">
          {renderMovies}
        </div>
      </div>
    </div>
  )
}

export default MovieListing
