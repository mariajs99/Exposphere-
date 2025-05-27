import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MuseumReviews(props) {
  if (!props.opiniones || props.opiniones.length === 0) {
    return <h4>No hay opiniones para este museo.</h4>;
  }

  return (
    <div>
      <h3>Comentarios</h3>
      {props.opiniones.map((cadaOpinion) => {
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
