import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { fetchAsynceMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from "../features/movies/movieSlice"
import { StarIcon } from '@heroicons/react/outline'



function MovieDetail() {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)
  useEffect(() => {
    dispatch(fetchAsynceMovieOrShowDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID])

  return (
    <div className="flex m-4">
      {Object.keys(data).length === 0 ? (<div>...Loading</div>) :
        (<>
          <div className="w-3/4">
            <div className="text-3xl font-bold pt-6">
              {data.Title}
            </div>
            <div className="flex w-100 justify-around py-5">
              <div className="flex items-center">IMDB Rating  <StarIcon className="h-5 w-5 ml-2" /> {data.imdbRating}</div>
              <div className="flex items-center">IMDB Votes:   {data.imdbVotes}</div>
              <div className="flex items-center">Runtime:  {data.Runtime}</div>
              <div className="flex items-center">Year:  {data.Year}</div>
            </div>
            <div className="pb-4 pr-5">
              {data.Plot}
            </div>

            <div className="flex gap-10">
              <div>
                <div> Director: </div>
                <div>  Stars: </div>
                <div> Genre: </div>
                <div> Language: </div>
              </div>
              <div>
                <div>{data.Director}</div>
                <div>{data.Actors}</div>
                <div>{data.Genre}</div>
                <div>{data.Language}</div>
              </div>
            </div>
          </div>
          <div>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>)}
    </div>
  )
}

export default MovieDetail
