import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function MuseumDescription({ museo, museos, setMuseos }) {


  if (!museo) {
    return <p>Cargando detalles del museo...</p>;
  }

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
        const museosActualizados = museos.map((cadaMuseo) =>
          cadaMuseo.id === museo.id
            ? { ...cadaMuseo, favorito: true }
            : cadaMuseo
        );
        setMuseos(museosActualizados);
        console.log("Favorito actualizado");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>{museo.nombre}</h2>
      <img src={museo.imagen} alt={museo.nombre} style={{ width: "300px" }} />
      <p>{`Corresponde a la categoria de ${museo.categoria}`}</p>
      <p>{museo.historia}</p>
      <p>{`Está ubicado en ${museo.ciudad}`}</p>
      <p>{`Horario de visita: ${museo.horario}`}</p>
      <p>{`Precio de la entrada: ${museo.precio}`}</p>

      <button
        className={`btn ${
          museoEnFavoritos ? "btn-success" : "btn-outline-primary"
        }`}
        onClick={añadirAFavoritos}
        disabled={museoEnFavoritos}
      >
        {museoEnFavoritos ? "✓ Añadido a favoritos" : "Añadir a Favoritos"}
      </button>

      <Link to={`/detalles/${museo.id}/editar`}>
        <button>Editar museo</button>
      </Link>
    </div>
  );
}

export default MuseumDescription;
