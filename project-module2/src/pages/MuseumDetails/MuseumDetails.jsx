import { useEffect, useState } from "react";
import MuseumAddReview from "./MuseumAddReview";
import MuseumDescription from "./MuseumDescription"; 
import MuseumReviews from "./MuseumReviews";
import { useParams } from "react-router-dom";
import axios from "axios";

function MuseumDetails () {

const params = useParams();
const [museo, setMuseo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/museos/${params.id}`
      );
      setMuseo(response.data);

    } catch (error) {
      console.error("Error al obtener detalles del museo:", error);
    }
  };

  if (museo === null) {
    return <h3>...Buscando detalles del museo</h3>;

  }
    return(
        <>
            <MuseumDescription museo={museo}/>
            <MuseumReviews />
            <MuseumAddReview/>
            
        </>
    )
}

export default MuseumDetails;