import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function MuseumAddReview(props) {
  const [usuario, setUsuario] = useState("");
  const [comentario, setComentario] = useState("");
  const [puntuacion, setPuntuacion] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleReviewSubmit = async (event) => {
    event.preventDefault();

    const nuevaOpinion = {
      usuario: usuario,
      comentario: comentario,
      puntuacion: Number(puntuacion),
      museoId: props.museoId,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/opiniones`,
        nuevaOpinion
      );
      setShowSuccess(true);

      props.actualizarOpiniones();

      setUsuario("");
      setComentario("");
      setPuntuacion("");

      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {showSuccess && (
        <Alert
          variant="success"
          onClose={() => setShowSuccess(false)}
          dismissible
        >
          Opinión añadida correctamente.
        </Alert>
      )}
      <h3>Añade tu comentario</h3>
      <div className="card shadow p-4">
        <form onSubmit={handleReviewSubmit}>
          <div className="mb-4">
            <label className="form-label">Tu nombre</label>
            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(event) => setUsuario(event.target.value)}
              placeholder="Introduce tu nombre"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Comentario</label>
            <textarea
              className="form-control"
              rows="3"
              value={comentario}
              onChange={(event) => setComentario(event.target.value)}
              placeholder="Escribe tu experiencia"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Puntuación (0 a 5)</label>
            <input
              type="number"
              className="form-control"
              min="0"
              max="5"
              step="0.1"
              value={puntuacion}
              onChange={(event) => setPuntuacion(event.target.value)}
              placeholder="4.5"
              required
            />
          </div>

          <Button type="submit" className="btn btn-success w-100">
            Enviar opinión
          </Button>
        </form>
      </div>
    </div>
  );
}

export default MuseumAddReview;
