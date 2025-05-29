import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMuseum() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [historia, setHistoria] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [horario, setHorario] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoMuseo = {
      nombre,
      descripcion,
      categoria,
      historia,
      ciudad,
      horario,
      imagen,
      precio,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/museos`, nuevoMuseo)
      .then(() => {
        alert("Museo creado correctamente");
        navigate("/explorar");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <Container className="mt-4">
      <div className="form-inline-container">
        <h2>Añadir nuevo museo</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Historia</Form.Label>
            <Form.Control
              as="textarea"
              value={historia}
              onChange={(e) => setHistoria(e.target.value)}
              rows={4}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Horario</Form.Label>
            <Form.Control
              type="text"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              name="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
            
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen (URL)</Form.Label>
            <Form.Control
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Crear museo
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default AddMuseum;
