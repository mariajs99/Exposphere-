import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MuseumsCards from "./MuseumsCards";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";

function ExploreMuseums({ museos, setMuseos }) {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  const categoriasUnicas = [];
  museos.forEach((museo) => {
    if (!categoriasUnicas.includes(museo.categoria)) {
      categoriasUnicas.push(museo.categoria);
    }
  });

  const museosFiltrados =
    categoriasSeleccionadas.length === 0
      ? museos
      : museos.filter((museo) =>
          categoriasSeleccionadas.includes(museo.categoria)
        );

  return (
    <>
      <Container fluid>
        <Row style={{ margin: "30px" }}>
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
