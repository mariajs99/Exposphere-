import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

function Favoritos({ museos, setMuseos }) {
  // Estado para indicar si se está procesando la eliminación
  const [eliminandoId, setEliminandoId] = useState(null);

  // Filtramos solo los museos marcados como favoritos
  const favoritos = museos.filter((cadaMuseo) => cadaMuseo.favorito);

  const eliminarMuseoDeFavoritos = (idDelMuseo) => {
    setEliminandoId(idDelMuseo); // Mostramos el spinner en el botón correspondiente
    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/museos/${idDelMuseo}`, {
        favorito: false,
      })
      .then(() => {
        //Se actualiza localmente el estado tras quitar un favorito en el backend.
        const nuevaLista = museos.map((cadaMuseo) => {
          if (cadaMuseo.id === idDelMuseo) {
            return { ...cadaMuseo, favorito: false };
          } else {
            return cadaMuseo;
          }
        });

        setMuseos(nuevaLista);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="fav-container">
      <h2>Museos Favoritos</h2>

      {favoritos.length === 0 ? (
        <p>Aún no hay museos en favoritos.</p>
      ) : (
        <Row className="g-4">
          {favoritos.map((museo) => (
            <Col key={museo.id} xs={12} sm={6} md={4} lg={3} className="d-flex">
              <Card className="h-100 w-100">
                <Card.Img
                  className="img-museoCard"
                  variant="top"
                  src={museo.imagen || "/404.avif"}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{museo.nombre}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {museo.descripcion}
                  </Card.Text>
                  <Card.Text>{museo.ciudad}</Card.Text>

                  <div className="botones-favoritos d-flex gap-2 mt-3 align-self-start">
                    <Button
                      as={Link}
                      to={`/detalles/${museo.id}`}
                      variant="primary"
                    >
                      Ver detalles
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => eliminarMuseoDeFavoritos(museo.id)}
                      disabled={eliminandoId === museo.id}
                    >
                      {eliminandoId === museo.id ? (
                        <>
                          <Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                          />
                          Eliminando...
                        </>
                      ) : (
                        "Eliminar de favoritos"
                      )}
                    </Button>
                  </div>
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
