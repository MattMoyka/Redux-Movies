import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { fetchAsynceMovieOrShowDetail, getSelectedMovieOrShow } from "../features/movies/movieSlice"



function MovieDetail() {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)
  useEffect(() => {
    dispatch(fetchAsynceMovieOrShowDetail(imdbID))
  }, [dispatch, imdbID])

  return (
    <div>
      <div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default MovieDetail
