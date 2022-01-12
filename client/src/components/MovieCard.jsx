function MovieCard(props) {
  const { data } = props;


  return (
    <div className="">
      <div className="flex flex-col items-center justify-around bg-teal-800">
        <div>
          <img className='w-auto ' src={data.Poster} alt={data.Title} />
        </div>

        <div className="p-5 text-white">
          <h4 className=' font-bold'>{data.Title}</h4>
          <p className=" text-sm">{data.Year}</p>
        </div>

      </div>
    </div>
  )
}

export default MovieCard
