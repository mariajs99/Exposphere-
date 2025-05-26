
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MyFooter from './components/MyFooter'
import MyNavbar from './components/MyNavbar'
import ExploreMuseums from './pages/Explore/ExploreMuseums'

function App() {

  return (
    <>
      <MyNavbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Explore' element={<ExploreMuseums/>}/>

      </Routes>

      <MyFooter/>

    </>
  )
}

export default App
