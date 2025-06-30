import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner"; 
import MuseumAddReview from "./MuseumAddReview";
import MuseumDescription from "./MuseumDescription";
import MuseumReviews from "./MuseumReviews";
import { useParams } from "react-router-dom";
import axios from "axios";

function MuseumDetails({ museos, setMuseos }) {

  const params = useParams();

  const [museo, setMuseo] = useState(null);

  const [opiniones, setOpiniones] = useState(null);

  useEffect(() => {
    // Cuando el componente carga, obtenemos la info del museo y sus opiniones
    getData();
    getOpiniones();

  }, [params.id]); // Volver a cargar si cambia el id en la URL

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/museos/${params.id}`
      );
      setMuseo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Función para obtener todas las opiniones y filtrar las que son de este museo
  const getOpiniones = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/opiniones`
      );
      const todasLasOpiniones = response.data;

      // Filtrar opiniones que coinciden con el id del museo actual
      const opinionesFiltradas = todasLasOpiniones.filter((cadaOpinion) => {
        return cadaOpinion.museoId === params.id;
      });

      setOpiniones(opinionesFiltradas);

    } catch (error) {
      console.log(error);
    }
  };

  if (museo === null || opiniones === null) {
   return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
        <Spinner animation="border" role="status" variant="dark" />
        
      </div>
    );
  }
  return (
    <>
      <MuseumDescription museo={museo} museos={museos} setMuseos={setMuseos} />
      <hr></hr>
      <div className="review-container">
        <div className="review-section">
          <MuseumReviews opiniones={opiniones} />
        </div>
        <div className="add-review-section">
          <MuseumAddReview
            museoId={params.id}
            actualizarOpiniones={getOpiniones}
          />
        </div>
      </div>
    </>
  );
}

export default MuseumDetails;
