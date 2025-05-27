import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MuseumReviews() {
  const params = useParams();
  const [opiniones, setOpiniones] = useState(null);


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/opiniones`)
      .then((response) => {
        const todasLasOpiniones = response.data;
        const opinionesFiltradas = todasLasOpiniones.filter((cadaOpinion) => {
          return cadaOpinion.museoId === params.id;
        });
        setOpiniones(opinionesFiltradas);

      })
      .catch((error) => {
        console.log(error);

      });

  }, []);

  if (opiniones === null) {
    return <h4>...Cargando opiniones</h4>;
  }

  return (
    <div>
      <h3>Comentarios</h3>
      {opiniones.map((cadaOpinion) => {
        return (
          <Card key={cadaOpinion.id} className="mb-3">
            <Card.Body>
              <Card.Title>{cadaOpinion.usuario}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Puntuación: {cadaOpinion.puntuacion} / 5
              </Card.Subtitle>
              <Card.Text>{cadaOpinion.comentario}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default MuseumReviews;
