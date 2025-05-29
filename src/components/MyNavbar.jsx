import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from 'react-router-dom';

function MyNavbar({buscarMuseos, setBuscarMuseos}) {

  const navigate = useNavigate()
  
  const handleInputChange = (event) => {
    setBuscarMuseos(event.target.value)
  }

  const handleSearchButton = () => {
    navigate(`/explorar/`)
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // reemplaza por tu logo
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
            <Nav.Link as={Link} to="/explorar">Explorar</Nav.Link>
            <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar por nombre o ciudad..."
              value={buscarMuseos}
              className="me-2"
              aria-label="Search"
              onChange={handleInputChange}
            />
            <Button 
            onClick={handleSearchButton}
            variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
