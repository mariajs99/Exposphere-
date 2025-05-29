import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import "../App.css"

function Favoritos({ museos, setMuseos }) {
  const favoritos = museos.filter((cadaMuseo) => cadaMuseo.favorito);

  const eliminarMuseoDeFavoritos = (idDelMuseo) => {
    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/museos/${idDelMuseo}`, {
        favorito: false,
      })
      .then(() => {
        const nuevaListaDeMuseos = museos.map((cadaMuseo) => {
          if (cadaMuseo.id === idDelMuseo) {
            return { ...cadaMuseo, favorito: false };
          } else {
            return cadaMuseo;
          }
        });
        setMuseos(nuevaListaDeMuseos);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h2>Museos Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>Aún no hay museos en favoritos.</p>
      ) : (
        <Row className="g-4">
          {favoritos.map((museo) => (
            <Col key={museo.id} md={4}>
              <Card className="h-100">
                <Card.Img
                  className="img-museoCard"
                  variant="top"
                  src={museo.imagen}
                />
                <Card.Body>
                  <Card.Title>{museo.nombre}</Card.Title>
                  <Card.Text>{museo.ciudad}</Card.Text>
                  <Card.Text>{museo.descripcion}</Card.Text>
                  <Button
                    as={Link}
                    to={`/detalles/${museo.id}`}
                    variant="primary"
                  >
                    Ver detalles
                  </Button>
                  <Button 
                  variant="primary"
                  onClick={() => eliminarMuseoDeFavoritos(museo.id)}>
                    Eliminar de favoritos
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Favoritos;
