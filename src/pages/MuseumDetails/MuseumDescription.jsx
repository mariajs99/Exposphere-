import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function MuseumDescription({ museo, museos, setMuseos }) {
  const navigate = useNavigate();

  if (!museo) {
    return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  );
  }

  // Comprueba si el museo está marcado como favorito en el estado global 'museos'
  // Esto permite controlar el botón de favoritos y evitar duplicados
  const museoEnFavoritos =
    museos.find((m) => m.id === museo.id)?.favorito === true;

  //Busca el museo en el array museos que tenga el mismo id que
  // el museo actual.
  // Si lo encuentra, mira si su propiedad favorito es true.
  // es así, museoEnFavoritos será true, si no, false.

  const añadirAFavoritos = () => {
    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/museos/${museo.id}`, {
        favorito: true,
      })
      .then(() => {
      // Actualiza la lista de museos localmente para reflejar el cambio sin recargar
        const museosActualizados = museos.map((cadaMuseo) =>
          cadaMuseo.id === museo.id
            ? { ...cadaMuseo, favorito: true }
            : cadaMuseo
        );
        setMuseos(museosActualizados);
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  return (
    <div className=" bg-body-tertiary museum-container">
      <h2>{museo.nombre}</h2>
      <div className="info-container">
        <div
          className="museum-image"
          style={{
            width: "600px",
            height: "300px",
            overflow: "hidden",
            borderRadius: "0.5rem",
          }}
        >
          <img
            src={museo.imagen || "/404.avif"}
            alt={museo.nombre}
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="museum-info">
          <p>{museo.historia}</p>
          <p>
            <strong>Categoría:</strong> {museo.categoria}
          </p>
          <p>
            <strong>Ciudad:</strong> {museo.ciudad}
          </p>
          <p>
            <strong>Horario:</strong> {museo.horario}
          </p>
          <p>
            <strong>Precio de entrada:</strong> {museo.precio}
          </p>
          <div className="details-btn">
            <Button
              className={`btn ${
                museoEnFavoritos ? "btn-danger" : "btn-outline-primary"
              }`}
              onClick={añadirAFavoritos}
              disabled={museoEnFavoritos}
              variant="danger"
            >
              {museoEnFavoritos
                ? "✓ Añadido a favoritos"
                : "Añadir a Favoritos"}
            </Button>

            <Button
              as={Link}
              to={`/detalles/${museo.id}/editar`}
              variant="primary"
            >
              Editar Museo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MuseumDescription;
