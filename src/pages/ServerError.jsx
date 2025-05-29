import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServerError() {
  return (
   <Container className="text-center mt-5">
      <img
        src="/error500.webp" 
        alt="Error del servidor"
        style={{ maxWidth: "300px", marginBottom: "20px" }}
      />
      <h1 className="display-4">500 - Error del servidor</h1>
      <p className="lead">Algo salió mal. Por favor, inténtalo más tarde.</p>
      <Button variant="danger" as={Link} to="/">
        Volver al inicio
      </Button>
    </Container>
  );
}

export default ServerError;