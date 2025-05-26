function MuseumDescription () {
    const {id} = useParams();

    return(
            <div>
      <h1>Detalles del museo {id}</h1>
    </div>
    )
}

export default MuseumDescription;