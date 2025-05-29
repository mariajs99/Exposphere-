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
import Favoritos from "./pages/Favoritos";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ServerError from "./pages/ServerError";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";

function App() {
  const [museos, setMuseos] = useState([]);

  const [buscarMuseos, setBuscarMuseos] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/museos`
      );

      setMuseos(response.data);
    } catch (error) {
      console.error("Error al obtener museos:", error);
    }
  };

  return (
    <div className="app-container">
      <MyNavbar buscarMuseos={buscarMuseos} setBuscarMuseos={setBuscarMuseos}/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/explorar"
            element={<ExploreMuseums museos={museos} setMuseos={setMuseos} buscarMuseos={buscarMuseos} setBuscarMuseos={setBuscarMuseos} />}
          />
          <Route
            path="/detalles/:id"
            element={<MuseumDetails museos={museos} setMuseos={setMuseos} />}
          />
          <Route path="/añadirMuseo" element={<AddMuseum />} />
          <Route path="/detalles/:id/editar" element={<EditMuseum />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/favoritos" element={<Favoritos museos={museos} setMuseos={setMuseos} />} />
        
           {/*Rutas de gestión de errores */}
           <Route path="/error" element={<ServerError/>} />
           <Route path="/construccion" element={<UnderConstruction/>} />
           <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
