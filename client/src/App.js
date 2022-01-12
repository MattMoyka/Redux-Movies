
import './App.css';

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'

function App() {
  return (
    <div className="">
      <Header></Header>
      <div className='mt-0 mb-0'>


        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
