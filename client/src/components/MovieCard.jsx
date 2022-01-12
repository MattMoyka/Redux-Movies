import { Link } from 'react-router-dom'

function MovieCard(props) {
  const { data } = props;


  return (
    <div className="">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="flex flex-col w-auto  justify-around hover:scale-110 duration-500 bg-teal-800 cursor-pointer ">
          <div>
            <img className='w-96 h-[300px] ' src={data.Poster} alt={data.Title} />
          </div>

          <div className="p-5 h-30 text-white">
            <h4 className=' font-bold'>{data.Title}</h4>
            <p className=" text-sm">{data.Year}</p>
          </div>

        </div>
      </Link>
    </div>
  )
}

export default MovieCard
