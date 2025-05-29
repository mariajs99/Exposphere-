import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function NotFound() {
  return (
     <Container className="text-center mt-5">
      <img
        src="/error404.png" 
        alt="Página no encontrada"
        style={{ maxWidth: "300px", marginBottom: "20px" }}
      />
      <h1 className="display-4">404 - Página no encontrada</h1>
      <p className="lead">Lo sentimos, la página que buscas no existe.</p>
      <Button variant="danger" as={Link} to="/">
        Volver al inicio
      </Button>
    </Container>
  );
}

export default NotFound;