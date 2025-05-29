import { useEffect, useState } from "react";
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
    getData();
    getOpiniones();
  }, []);

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

  const getOpiniones = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/opiniones`
      );
      const todasLasOpiniones = response.data;
      const opinionesFiltradas = todasLasOpiniones.filter((cadaOpinion) => {
        return cadaOpinion.museoId === params.id;
      });
      setOpiniones(opinionesFiltradas);
    } catch (error) {
      console.log(error);
    }
  };

  if (museo === null || opiniones === null) {
    return <h3>...Cargando detalles y opiniones del museo</h3>;
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
