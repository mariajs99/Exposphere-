import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UnderConstruction() {
  return (
    <Container className="text-center mt-5">
         <img
        src="/construction.png" 
        alt="Error del servidor"
        style={{ maxWidth: "300px", marginBottom: "20px" }}
      />
      <h1  className="display-4">Página en construcción</h1>
      <p className="lead">Estamos trabajando en ello. ¡Vuelve pronto!</p>
     <Button variant="danger" as={Link} to="/">
        Volver al inicio
      </Button>
    </Container>
  );
}

export default UnderConstruction;