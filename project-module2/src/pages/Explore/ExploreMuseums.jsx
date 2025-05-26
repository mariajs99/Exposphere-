import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MuseumsCards from "./MuseumsCards";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

function ExploreMuseums() {
  const [museos, setMuseos] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/museos")
      .then((response) => response.json())
      .then((data) => {
        setMuseos(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const categoriasUnicas = [];
  museos.forEach((museo) => {
    if (!categoriasUnicas.includes(museo.categoria)) {
      categoriasUnicas.push(museo.categoria);
    }
  });

   const museosFiltrados = categoriasSeleccionadas.length === 0
    ? museos
    : museos.filter((museo) =>
        categoriasSeleccionadas.includes(museo.categoria)
      );


  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={3}>
            <Sidebar
              categoriasSeleccionadas={categoriasSeleccionadas}
              categorias={categoriasUnicas}
              setCategoriasSeleccionadas={setCategoriasSeleccionadas}
            />
          </Col>

          <Col xs={12} md={9}>
            <MuseumsCards museos={museosFiltrados} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ExploreMuseums;
