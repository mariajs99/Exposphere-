import { Link } from "react-router-dom";

function MuseumDescription({ museo }) {


  if (!museo) {
    return <p>Cargando detalles del museo...</p>;
  }
  return (
    <div>
      <h2>{museo.nombre}</h2>
      <img src={museo.imagen} alt={museo.nombre} style={{ width: "300px" }} />
      <p>{`Corresponde a la categoria de ${museo.categoria}`}</p>
      <p>{museo.historia}</p>
      <p>{`Está ubicado en ${museo.ciudad}`}</p>
      <p>{`Horario de visita: ${museo.horario}`}</p>
      <p>{`Precio de la entrada: ${museo.precio}`}</p>

      <Link to={`/detalles/${museo.id}/editar`}>
      <button style={{ marginTop: "1rem" }}>
        Editar museo
      </button>
      </Link>
    </div>
  );
}

export default MuseumDescription;
