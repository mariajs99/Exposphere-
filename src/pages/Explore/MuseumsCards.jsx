import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../App.css"

function MuseumsCards(props) {
  console.log( props.museos);

  /*Creamos aquí cada una de las cartas con .map, 
    y cada una de ellas tienen un botón de ver más info
    que nos lleva a (link to:) MuseumDetails */

  return (
    <Row className="g-4">
      {props.museos.length === 0 ? (
        <p>...Buscando museos que mostrar.</p>
      ) : (
        props.museos.map((cadaMuseo) => (
          <Col key={cadaMuseo.id} md={4}>
            <Card className="h-100">
              <Card.Img
                className="img-museoCard"
                variant="top"
                src={cadaMuseo.imagen}
              />
              <Card.Body>
                <Card.Title>{cadaMuseo.nombre}</Card.Title>
                <Card.Text>{cadaMuseo.ciudad}</Card.Text>
                <Card.Text>{cadaMuseo.descripcion}</Card.Text>
                <Button
                  as={Link}
                  to={`/detalles/${cadaMuseo.id}`}
                  variant="primary"
                >
                  Ver detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  )
}

export default MuseumsCards;
