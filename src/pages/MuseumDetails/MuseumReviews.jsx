import { useState } from "react";
import { Button, Card } from "react-bootstrap";

function MuseumReviews(props) {

  const [likes, setLikes] = useState([]);

  // Función para dar "like" a un comentario, impide duplicados
  function darLike(index) {
    if (likes.includes(index)) return; // ya le dimos like
    setLikes([...likes, index]);
  }

  function calcularMedia(opiniones) {
  if (opiniones.length === 0) return null;
  const total = opiniones.reduce((acc, op) => acc + op.puntuacion, 0);
  const media = total / opiniones.length;
  //.toFixed(1) convierte la media a 1 decimal.
  return media.toFixed(1);
}

  if (!props.opiniones || props.opiniones.length === 0) {
    return <h4>Aún no hay opiniones de este museo.</h4>;
  }

  return (
    <div>
      <h3>Comentarios</h3>

      <h5>
        Puntuación media: {calcularMedia(props.opiniones)} / 5
      </h5>

       {props.opiniones.map((cadaOpinion, index) => (
        <Card key={cadaOpinion.id || index} className="mb-3">
          <Card.Body>
            <Card.Title>{cadaOpinion.usuario}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Puntuación: {cadaOpinion.puntuacion} / 5
            </Card.Subtitle>
            <Card.Text>{cadaOpinion.comentario}</Card.Text>

            <Button
              onClick={() => darLike(index)}
              disabled={likes.includes(index)} // botón se desactiva si ya se dio like
              variant="outline-warning"
            >
              👍 {likes.includes(index) ? 1 : 0}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MuseumReviews;
