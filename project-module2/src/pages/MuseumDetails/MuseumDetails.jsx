import { useEffect, useState } from "react";
import MuseumAddReview from "./MuseumAddReview";
import MuseumDescription from "./MuseumDescription"; 
import MuseumReviews from "./MuseumReviews";
import { useParams } from "react-router-dom";

function MuseumDetails () {
    const { id } = useParams();
    const [museo, setMuseo] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:5005/museos/${id}`)
        .then((response) => response.json())
        
        .then((data) => {

            setMuseo(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id])

    if(!museo) {
        return <p>Cargando detalles del museo...</p>
    }
    
    console.log("museo:", museo);

    return(
        <>
            <MuseumDescription museo={museo}/>
            <MuseumReviews/>
            <MuseumAddReview/>
            
        </>
    )
}

export default MuseumDetails;