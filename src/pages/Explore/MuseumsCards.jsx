import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../App.css";

function MuseumsCards(props) {
  console.log(props.museos);

  /*Creamos aquí cada una de las cartas con .map, 
    y cada una de ellas tienen un botón de ver más info
    que nos lleva a (link to:) MuseumDetails */

  return (
    <Row className="g-4">
      {props.museos.length === 0 ? (
        <p>...Buscando museos que mostrar.</p>
      ) : (
        props.museos.map((cadaMuseo) => (
          <Col key={cadaMuseo.id}  xs={12} sm={6} md={4}>
            <Card className="h-100">
              <Card.Img
                className="img-museoCard"
                variant="top"
                src={cadaMuseo.imagen}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{cadaMuseo.nombre}</Card.Title>
                <Card.Text>{cadaMuseo.descripcion}</Card.Text>
                <Card.Text>{cadaMuseo.ciudad}</Card.Text>
                <Button
                  as={Link}
                  to={`/detalles/${cadaMuseo.id}`}
                  variant="primary"
                  className="mt-2 w-auto align-self-start"
                >
                  Ver detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
}

export default MuseumsCards;
