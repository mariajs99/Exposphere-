
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MyFooter from './components/MyFooter'
import MyNavbar from './components/MyNavbar'
import ExploreMuseums from './pages/Explore/ExploreMuseums'
import MuseumDetails from './pages/MuseumDetails/MuseumDetails'

function App() {

  return (
    <>
      <MyNavbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/explorar' element={<ExploreMuseums/>}/>
        <Route path="/detalles/:id" element={<MuseumDetails />} />

      </Routes>

      <MyFooter/>

    </>
  )
}

export default App
