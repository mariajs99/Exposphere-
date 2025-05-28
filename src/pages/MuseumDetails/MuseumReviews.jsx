import { useState } from "react";
import { Button, Card } from "react-bootstrap";

function MuseumReviews(props) {
  const [likes, setLikes] = useState([]);

  function darLike(index) {
    if (likes.includes(index)) return;
    setLikes([...likes, index]);
  }

  if (!props.opiniones || props.opiniones.length === 0) {
    return <h4>Aún no hay opiniones de este museo.</h4>;
  }

  return (
    <div>
      <h3>Comentarios</h3>
      {props.opiniones.map((cadaOpinion, index) => {
        let yaTieneLike = likes.includes(index);
        let cantidadDeLikes = yaTieneLike ? 1 : 0;
        return (
          <Card key={cadaOpinion.id} className="mb-3">
            <Card.Body>
              <Card.Title>{cadaOpinion.usuario}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Puntuación: {cadaOpinion.puntuacion} / 5
              </Card.Subtitle>
              <Card.Text>{cadaOpinion.comentario}</Card.Text>
              <Button
                variant="outline-primary"
                onClick={function () {
                  darLike(index);
                }}
                disabled={yaTieneLike}
              >
                👍 {cantidadDeLikes}
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default MuseumReviews;
