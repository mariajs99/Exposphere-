import MuseumAddReview from "./MuseumAddReview";
import MuseumDescription from "./MuseumAddReview";
import MuseumReviews from "./MuseumReviews";

function MuseumDetails () {
    const { id } = useParams();

    return(
        <>
            <MuseumDescription id={id}/>
            <MuseumReviews/>
            <MuseumAddReview/>
            
        </>
    )
}

export default MuseumDetails;