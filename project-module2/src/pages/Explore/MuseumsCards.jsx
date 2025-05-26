import { Link } from "react-router-dom";

function MuseumsCards () {
    /*Creamos aquí cada una de las cartas con .map, 
    y cada una de ellas tienen un botón de ver más info
    que nos lleva a (link to:) MuseumDetails */
    return(
        <Link to={`/MuseumDetails/...`}>
            <button>Ver Más</button>
        </Link>

    )
}

export default MuseumsCards;