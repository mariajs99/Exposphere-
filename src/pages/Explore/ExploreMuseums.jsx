import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MuseumsCards from "./MuseumsCards";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";

function ExploreMuseums({ museos, setMuseos, buscarMuseos, setBuscarMuseos }) {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  const textoBusqueda = buscarMuseos.toLowerCase();

  const categoriasUnicas = [];
  museos.forEach((museo) => {
    if (!categoriasUnicas.includes(museo.categoria)) {
      categoriasUnicas.push(museo.categoria);
    }
  });

  const museosFiltradosPorBusqueda = museos.filter((museo) =>
  museo.nombre.toLowerCase().includes(textoBusqueda) ||
  museo.ciudad.toLowerCase().includes(textoBusqueda)
);

  const museosFiltrados = categoriasSeleccionadas.length === 0
  ? museosFiltradosPorBusqueda
  : museosFiltradosPorBusqueda.filter((museo) =>
      categoriasSeleccionadas.includes(museo.categoria)
    );

  return (
    <>
      <Container fluid>
        <Row className="p-4 gx-1">
          <Col xs={12} md={3} className="sidebar-filters">
            <Sidebar
              categoriasSeleccionadas={categoriasSeleccionadas}
              categorias={categoriasUnicas}
              setCategoriasSeleccionadas={setCategoriasSeleccionadas}
            />
          </Col>

          <Col xs={12} md={9} className="museums-cards">
            <MuseumsCards
              dataMuseos={museos}
              museos={museosFiltrados}
              setMuseos={setMuseos}
              
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ExploreMuseums;
