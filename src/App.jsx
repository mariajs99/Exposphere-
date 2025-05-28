import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import ExploreMuseums from "./pages/Explore/ExploreMuseums";
import MuseumDetails from "./pages/MuseumDetails/MuseumDetails";
import AddMuseum from "./pages/AddMuseum";
import EditMuseum from "./pages/EditMuseum";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="app-container">
      <MyNavbar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<ExploreMuseums />} />
        <Route path="/detalles/:id" element={<MuseumDetails />} />
        <Route path="/añadirMuseo" element={<AddMuseum />} />
        <Route path="/detalles/:id/editar" element={<EditMuseum />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
