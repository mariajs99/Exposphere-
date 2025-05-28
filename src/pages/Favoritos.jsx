import { Link } from "react-router-dom";
import axios from "axios";

function Favoritos ({museos, setMuseos}) {

  const favoritos = museos.filter((cadaMuseo) => cadaMuseo.favorito)

  const eliminarMuseoDeFavoritos = (idDelMuseo) => {
    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/museos/${idDelMuseo}`, {
        favorito: false,
      })
      .then(() => {
        // Actualizamos el estado en el frontend
        const nuevaListaDeMuseos = museos.map((cadaMuseo) => {
          if (cadaMuseo.id === idDelMuseo) {
            return { ...cadaMuseo, favorito: false };
          } else {
            return cadaMuseo;
          }
        });
        setMuseos(nuevaListaDeMuseos);
      })
      .catch((error) => {
        console.error("Error al eliminar de favoritos:", error);
      });
  };
    return(

        <div>
      <h2>Museos Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>Aún no has añadido ningún museo a favoritos.</p>
      ) : (
        <ul>
          {favoritos.map((museo) => (
            <li key={museo.id} >
              <h3>{museo.nombre}</h3>
              <img src={museo.imagen} style={{ width: "200px" }} />
              <p>{museo.ciudad}</p>
              <Link to={`/detalles/${museo.id}`}>Ver detalles</Link>
              <button onClick={() => eliminarMuseoDeFavoritos(museo.id)}>Eliminar de favoritos</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    )
}

export default Favoritos;