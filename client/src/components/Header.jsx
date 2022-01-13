import { Link } from 'react-router-dom'
import { BeakerIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="flex items-center justify-between bg-teal-500 p-6">
      <Link to='/'>
        <div className="text-2xl font-bold">Redux Movie App</div>
      </Link>
      <div>
        <BeakerIcon className='h-5 w-5' />
      </div>
    </div>
  )
}

export default Header
